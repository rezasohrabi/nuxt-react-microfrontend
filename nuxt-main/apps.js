import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "angularApp",
    entry: "localhost:4200",
    container: "#container",
    activeRule: "app-angular"
  },
  {
    name: "reactApp",
    entry: "//localhost:3000",
    container: "#container",
    activeRule: "/app-react"
  },
  {
    name: "vueApp",
    entry: "//localhost:8080",
    container: "#container",
    activeRule: "/app-vue"
  }
]);

start();
