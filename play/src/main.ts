import { createApp } from "vue";
import App from "./App.vue";
import VueDir from "@vuedir/core";

const app = createApp(App);
app.use(VueDir);
app.mount("#app");
