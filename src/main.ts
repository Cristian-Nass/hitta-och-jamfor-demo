import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'bootstrap/dist/css/bootstrap.css';
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
