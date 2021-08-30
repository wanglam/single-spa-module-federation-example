import { registerApplication, start } from "single-spa";

registerApplication(
  "app1",
  // @ts-ignore
  () => import("sub-app1/App"),
  (location) => location.pathname === "/app1"
);

registerApplication(
  "app2",
  // @ts-ignore
  () => import("sub-app2/App"),
  (location) => location.pathname === "/app2"
);

start();
