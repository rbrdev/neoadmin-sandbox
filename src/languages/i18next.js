import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { languages } from "@neoco/neoco-backoffice";
import { merge } from "lodash";
import es from "./es.json";

i18n.use(initReactI18next).init({
  fallbackLng: "es",
  resources: {
    es: merge({}, es, languages.es),
  },
});

export default i18n;
