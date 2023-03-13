<template>
  <canvas ref="threeref"></canvas>
</template>

<script setup>
import WorldImg from "~~/assets/imgs/contactme/globe.png";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
const threeref = ref(null);
const initAniamtion = () => {
  //-- scene
  const scene = new THREE.Scene();
  //--
  let counter = 200000;
  let rad = 5;
  let sph = new THREE.Spherical();

  let r = 0;
  let dlong = Math.PI * (3 - Math.sqrt(5));
  let dz = 2 / counter;
  let long = 0;
  let z = 1 - dz / 2;

  let pts = [];
  let clr = [];
  let c = new THREE.Color();
  let uvs = [];

  for (let i = 0; i < counter; i++) {
    r = Math.sqrt(1 - z * z);
    let p = new THREE.Vector3(
      Math.cos(long) * r,
      z,
      -Math.sin(long) * r
    ).multiplyScalar(rad);
    pts.push(p);
    z = z - dz;
    long = long + dlong;

    c.setHSL(0, 0, Math.random() * 0.55 + 0.25);
    c.toArray(clr, i * 3);

    sph.setFromVector3(p);
    uvs.push((sph.theta + Math.PI) / (Math.PI * 2), 1.0 - sph.phi / Math.PI);
  }
  let g = new THREE.BufferGeometry().setFromPoints(pts);
  g.setAttribute("color", new THREE.Float32BufferAttribute(clr, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  let m = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
    onBeforeCompile: (shader) => {
      shader.uniforms.globeTexture = {
        value: new THREE.TextureLoader().load(WorldImg),
      };
      shader.vertexShader = `
    	uniform sampler2D globeTexture;
      varying float vVisibility;
      varying vec3 vNormal;
      varying vec3 vMvPosition;
      ${shader.vertexShader}
    `.replace(
        `gl_PointSize = size;`,
        `
      	vVisibility = texture(globeTexture, uv).g; // get value from texture
        gl_PointSize = size * (vVisibility < 0.5 ? 1. : 0.75); // size depends on the value
        vNormal = normalMatrix * normalize(position);
        vMvPosition = -mvPosition.xyz;
        gl_PointSize *= 0.4 + (dot(normalize(vMvPosition), vNormal) * 0.6); // size depends position in camera space
      `
      );
      //console.log(shader.vertexShader);
      shader.fragmentShader = `
    	varying float vVisibility;
      varying vec3 vNormal;
      varying vec3 vMvPosition;
      ${shader.fragmentShader}
    `.replace(
        `vec4 diffuseColor = vec4( diffuse, opacity );`,
        `
      	bool circ = length(gl_PointCoord - 0.5) > 0.5; // make points round
        bool vis = dot(vMvPosition, vNormal) < 0.; // visible only on the front side of the sphere
      	if (circ || vis) discard;

        vec3 col = diffuse + (vVisibility > 0.5 ? 0.5 : 0.); // make oceans brighter

        vec4 diffuseColor = vec4( col, opacity );
      `
      );
      //console.log(shader.fragmentShader);
    },
  });
  let globe = new THREE.Points(g, m);
  scene.add(globe);
  let icshdrn = new THREE.Mesh(
    new THREE.IcosahedronGeometry(rad, 1),
    new THREE.MeshBasicMaterial({ color: 0xcfd0d2, wireframe: true })
  );
  globe.add(icshdrn);
  // <Markers>
  const markerCount = 1;
  let markerInfo = []; // information on markers
  let gMarker = new THREE.PlaneGeometry();
  let mMarker = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    onBeforeCompile: (shader) => {
      shader.uniforms.time = new Date().getTime();
      shader.vertexShader = `
    	attribute float phase;
      varying float vPhase;
      ${shader.vertexShader}
    `.replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
      	vPhase = phase; // de-synch of ripples
      `
      );
      //console.log(shader.vertexShader);
      shader.fragmentShader = `
    	uniform float time;
      varying float vPhase;
    	${shader.fragmentShader}
    `.replace(
        `vec4 diffuseColor = vec4( diffuse, opacity );`,
        `
      vec2 lUv = (vUv - 0.5) * 2.;
      float val = 0.;
      float lenUv = length(lUv);
      val = max(val, 1. - step(0.25, lenUv)); // central circle
      val = max(val, step(0.4, lenUv) - step(0.5, lenUv)); // outer circle

      float tShift = fract(time * 0.5 + vPhase);
      val = max(val, step(0.4 + (tShift * 0.6), lenUv) - step(0.5 + (tShift * 0.5), lenUv)); // ripple

      if (val < 0.5) discard;

      vec4 diffuseColor = vec4( diffuse, opacity );`
      );
      //console.log(shader.fragmentShader)
    },
  });
  mMarker.defines = { USE_UV: " " }; // needed to be set to be able to work with UVs
  let markers = new THREE.InstancedMesh(gMarker, mMarker, markerCount);
  let dummy = new THREE.Object3D();
  let phase = [];
  for (let i = 0; i < markerCount; i++) {
    const egy = {
      x: 2.2,
      y: 2.5086124216168033,
      z: 4.39896273566048,
    };
    dummy.position.x = egy.x;
    dummy.position.y = egy.y;
    dummy.position.z = egy.z;
    dummy.lookAt(dummy.position.clone().setLength(rad + 1));
    dummy.updateMatrix();
    markers.setMatrixAt(i, dummy.matrix);
    phase.push(Math.random());
  }
  gMarker.setAttribute(
    "phase",
    new THREE.InstancedBufferAttribute(new Float32Array(phase), 1)
  );

  scene.add(markers);
  //-- create glob
  // const worldTexture = new THREE.TextureLoader().load(WorldImg);
  // const geometry = new THREE.SphereGeometry(3, 64, 64);
  // const material = new THREE.MeshBasicMaterial({
  //   color: "#ffffff",
  //   map: worldTexture,
  //   transprent: false,
  // });
  // const mesh = new THREE.Mesh(geometry, material);
  // scene.add(mesh);

  //-- Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  //-- camera
  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.set(0.5, 0.5, 1).setLength(14);
  scene.add(camera);

  //- light
  const light = new THREE.PointLight("0xF1FFF1", 1, 100);
  light.position.set(1, 20, 20);
  scene.add(light);

  //- Rendere
  const canvas = threeref.value;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(2);
  renderer.render(scene, camera);
  renderer.setClearColor(0xf1fff1);

  //-- controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.enableRotate = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed *= 0.25;
  //- resize listiner
  const resizeListiner = () => {
    window.addEventListener("resize", () => {
      sizes.height = window.innerHeight;
      sizes.width = window.innerWidth;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });
    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();
  };
  resizeListiner();
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.fromTo(globe.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 });
};
onMounted(() => {
  requestAnimationFrame(initAniamtion);
});
</script>
