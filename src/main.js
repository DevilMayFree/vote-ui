import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import '@nutui/touch-emulator'
import '@/assets/css/index.scss'
import 'swiper/css';

import {Button, Image, Input, Notify, Overlay, Progress} from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

createApp(App)
    .use(router)
    .use(Button)
    .use(Overlay)
    .use(Input)
    .use(Progress)
    .use(Notify)
    .use(Image)
    .mount('#app')
