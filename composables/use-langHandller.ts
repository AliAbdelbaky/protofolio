// import { useI18n } from "vue-i18n";
import { useLocale } from "vuetify";
export default function () {
  const refreshing = ref(false);
  // const { locale } = useI18n();
  const { current, isRtl } = useLocale();

  const refreshAll = async () => {
    refreshing.value = true;
    try {
      await refreshNuxtData();
    } finally {
      refreshing.value = false;
    }
  };

  const setlang = (lang: string) => {
    // locale.value = lang;
    current.value = lang;
    isRtl.value = lang == "ar" ? true : false;
    localStorage.setItem("lang", lang);
    document.querySelector("html")?.setAttribute("lang", lang);
    document
      .querySelector("html")
      ?.setAttribute("dir", lang == "ar" ? "rtl" : "ltr");
    refreshAll();
  };

  // return { locale, setlang };
  return { setlang };
}
