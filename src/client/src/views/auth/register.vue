<template>
  <div class="sign-up">
    <p>Let's crate a new account !</p>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button @click="signUp">Sign Up</button>
    <span>
      or go back to
      <router-link to="/login">login</router-link>.
    </span>
  </div>
</template>
<script>
import firebase from "firebase/app";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert("Your account has been created !");
          },
          e => {
            alert("Oops. " + e.message);
          }
        );
    }
  }
};
</script>