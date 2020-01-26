<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button @click="login">Connection</button>
    <p>
      You don't have an account? You can
      <router-link to="/sign-up">create one</router-link>
    </p>
  </div>
</template>
<script>
import firebase from "firebase/app";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert("Well done ! You are now connected");
            this.$router.replace("home");
          },
          e => alert("Oops. " + e.message)
        );
    }
  }
};
</script>