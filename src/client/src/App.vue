<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1>Ev İklim Sensörleri</h1>
      </div>

      <v-spacer></v-spacer>
      <div v-if="user.loggedIn">
        {{ user.data.displayName || user.data.email }}
      </div>
      <div v-else>
        Log In
      </div>

      <!-- <v-btn

        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
//import firebase from "firebase/app";
import { mapGetters } from "vuex";

export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    // var provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    // firebase.auth().languageCode = 'tr';
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  }
};
</script>
