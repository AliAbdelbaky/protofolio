<template>
  <canvas ref="threeref"></canvas>
</template>

<script setup>
import WorldImg from "~~/assets/imgs/contactme/globe.png";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
let img;
const threeref = ref(null);
const initAniamtion = () => {
  //-- scene
  const scene = new THREE.Scene();
  //-- create glob
  const worldTexture = new THREE.TextureLoader().load(WorldImg);
  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const material = new THREE.MeshBasicMaterial({
    // color: "#ffffff",
    map: worldTexture,
    transprent: true,
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

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
  camera.position.z = 9;
  scene.add(camera);

  //- light
  const light = new THREE.PointLight("0xffff", 1, 100);
  light.position.set(1, 20, 20);
  scene.add(light);

  //- Rendere
  const canvas = threeref.value;
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(2);
  renderer.render(scene, camera);
  renderer.setClearColor(0xffff);

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
  tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
};
onMounted(() => {
  initAniamtion();
});
</script>

<style scoped></style>
