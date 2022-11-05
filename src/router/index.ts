import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/mechsofthenorth",
      name: "mechs",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MechsView.vue"),
    },
    {
      path: "/auth/oauth2/itch",
      name: "oauth_itch",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/OAuth.vue"),
      beforeEnter: (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
      ) => {
        if (to.query.access_token !== undefined) { //Itch
          var queryString = window.location.hash.slice(1);
          var params = new URLSearchParams(queryString);
          var accessToken = params.get("access_token");
          var state = params.get("state");
          
          const apiUrl = process.env.VUE_APP_API_DEST;
          const clientId = process.env.ITCH_CLIENT_ID;
          let url = apiUrl + "api/v1/login/game/mech?clientId=" + clientId +  "&state=" + state + "&code=" + accessToken + "&login=Itch"
          // you can also get the state param if you're using it:
          // let params = new URLSearchParams(document.location.search).toString();
          // let state = to.query.state
        }
        if (to.query.code !== undefined) { //Discord
          let queryString = new URLSearchParams(document.location.search).toString();
          var params = new URLSearchParams(queryString)
          var code = params.get("code")
          var state = params.get("state")
          const clientId = process.env.DISCORD_CLIENT_ID;
          const apiUrl = process.env.VUE_APP_API_DEST;
          let url = apiUrl + "api/v1/login/game/mech?clientId" +clientId +"&state=" +state + "&code="+ code + "&login=Discord"
          const response = fetch(url,
            {
              method: "POST"
            }
          )
            .then(response => {
              if (response.ok) {
                return response;
              } else {
                return Promise.reject();
              }
            })
            .then(res => {
              console.log(res);
            })
            .catch(function(error) {
              // handle error
              console.log(error);
            });
          console.log("Logging in game");
        }
        next();
      },
    },
    {
      path: "/auth/oauth2/discord",
      name: "oauth_discord",
      component: () => import("../views/OAuth.vue"),
    },
  ],
});

export default router;
