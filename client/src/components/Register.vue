<template>
  <v-container>
    <h1>Register</h1>
    <v-card flat max-width="300px" class="mt-3 mx-auto">
      <v-form>
        <v-text-field placerholder="E-mail" label="E-mail" v-model="email"></v-text-field>
        <v-text-field placerholder="Password" label="Password" type="password" v-model="password"></v-text-field>
      </v-form>
      <v-card-actions>
        <v-btn depressed color="success" class="white--text mx-auto" @click="register">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "register",
  email: "",
  password: "",
  methods: {
    async register() {
      const reponse = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
</style>


