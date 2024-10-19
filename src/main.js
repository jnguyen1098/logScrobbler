import { createApp, defineComponent } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import registerGlobalComponents from '@/components/global';

// Define the Hero component and register it here
const Hero = defineComponent({
  name: 'Hero',
  template: `<p>huj</p>`
});

// Create the app instance
const app = createApp(App);

// Register global components like Hero
app.component('Hero', Hero);

// Use router and store with the Vue app instance
app.use(router);
app.use(store);

// Register other global components dynamically
registerGlobalComponents(app);

// Mount the app
app.mount('#app');

