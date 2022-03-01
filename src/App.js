import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("en");
  console.log(language);

  useEffect(() => {
    if (t("app_title") === "عنوان") {
      setLanguage("ar");
    } else if (t("app_title") === "Titre") {
      setLanguage("fr");
    } else if (t("app_title") === "Title") {
      setLanguage("en");
    } else if (t("app_title") === "Sarlavha") {
      setLanguage("uz");
    }
  }, [t]);

  return (
    <>
      <Navbar setLanguage={setLanguage} />
      <Home language={language} />
    </>
  );
}

export default App;
