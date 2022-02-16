import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "ant-design-vue/dist/antd.css";
import antDesignVue from "ant-design-vue";

createApp(App).use(router).use(antDesignVue).mount("#app");
