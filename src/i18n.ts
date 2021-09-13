import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "@/languages/en.json";
import ru from "@/languages/ru.json";
import az from "@/languages/az.json";

Vue.use(VueI18n);

const messages = {
  en: en,
  ru: ru,
  az: az,
};

const i18n = new VueI18n({
  locale: "az",
  messages,
});

export default i18n;
