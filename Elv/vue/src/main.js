import { createApp } from 'vue'
import App from './App_1.vue';
import router from "./router/index.js"
import store from "./store/index.js"

//배치할 요소(#app)와 애플리케이션을 연결하는것을 마운트라고 합니다.
createApp(App).use(router).use(store).mount('#app')
