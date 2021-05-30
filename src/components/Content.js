import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();

  return (
    <div className="container hero">
      <h1>{t("welcome text")}</h1>
      <p>{t("formatCurrency", { price: 69.99 })}</p>
      <p>{t("formatNumber", { num: 3000 })}</p>
      <p>{t("formatDate", { today: new Date() })}</p>
    </div>
  );
};

export default Content;
