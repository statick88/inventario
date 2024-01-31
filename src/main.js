import { createApp } from 'vue'
import { initializeApp } from 'firebase/app';
import './style.css'
import App from './App.vue'

const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

createApp(App).mount('#app')


// TODO: Replace the following with your app's Firebase project configuration

