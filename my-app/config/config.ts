import { defineConfig } from "@umijs/max";
import routes from "./routes";

export default defineConfig({
  antd: {
    dark: false,
    compact: true,
  },
  access: {},
  model: {},
  initialState: {},
  request: { dataField: "data" },
  favicons: [
    // 完整地址
    "https://telegraph-image-2s1.pages.dev/file/877db020dd515fe265932.png",
  ],

  layout: {
    title: "my-big-bang-pro",
  },
  routes,
  npmClient: "npm",
  tailwindcss: {},
});
