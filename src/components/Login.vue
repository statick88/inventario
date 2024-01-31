<!-- src/components/Login.vue -->
<template>
  <div>
    <h1>Iniciar Sesión</h1>
    <button @click="login">Iniciar Sesión con Google</button>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default {
  methods: {
    async login() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
