import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// tailwind
import "@/assets/index.css";
// vue-i18n
import i18n from "./i18n";

// for registration global components

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
// global components

const requireComponent = require.context(
  "@/components/Base",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach((fileName: any) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

//
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
