import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "reactApp",
    entry: "//localhost:4000",
    container: "#container",
    activeRule: "/app-react"
  }
]);

start();
