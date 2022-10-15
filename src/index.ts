import {createApp} from 'vue';
import App from './app.vue';
import createStore from './store/store';

const store = createStore();

const app = createApp(App);
app.use(store);
app.mount('#app');
