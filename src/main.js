import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import store from "./store";

// css
//---------------------------------------

import "milligram/dist/milligram.min.css";

createApp(App).use(store).use(router).mount('#app');
