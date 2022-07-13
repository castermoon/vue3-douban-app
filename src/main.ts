import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/style/reset.css"
import "@/assets/style/iconfont/iconfont.css"
import { Button } from 'ant-design-vue';
import { Carousel} from "ant-design-vue";

const app = createApp(App)
app.use(router).use(Button).use(Carousel).mount('#app')
