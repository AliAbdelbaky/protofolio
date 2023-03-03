import { navigateTo } from "#imports";

export default defineNuxtRouteMiddleware((to) => {
  const { $auth } = useNuxtApp();
  if ($auth.loggedIn) {
    return navigateTo("/");
  }
});
