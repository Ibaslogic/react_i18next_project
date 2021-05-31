import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Header = () => {
  const { t, i18n } = useTranslation();

  const menu = [
    {
      title: t("menu.aboutProject"),
      path: "#",
    },
    {
      title: t("menu.contactUs"),
      path: "#",
    },
  ];

  // Languages
  const languages = [
    { name: "English", code: "en" },
    { name: "日本語", code: "ja" },
    { name: "Français", code: "fr" },
    { name: "العربية", code: "ar" }, // , dir: "rtl"
    { name: "Deutsche", code: "de" },
  ];

  const currentLocale = Cookies.get("i18next") || "en";

  const [language, setLanguage] = useState(currentLocale);

  const handleChangeLocale = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const currentLangObj = languages.find((lang) => lang.code === currentLocale);

  useEffect(() => {
    // document.body.dir = currentLangObj.dir || "ltr";
    document.title = t("app_title");
  }, [currentLangObj, t]);

  return (
    <header>
      <div className="container header_content">
        <div className="brand">reactI18next</div>
        <nav>
          <ul>
            {menu.map(({ title, path }) => (
              <li key={title}>
                <a href={path}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="spacer"></div>
        <div className="switcher">
          {/* Language switch dropdown here */}
          <span>{t("languages")}</span>{" "}
          <select onChange={handleChangeLocale} value={language}>
            {languages.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
