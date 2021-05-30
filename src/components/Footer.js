import { useState } from "react";

import { useTranslation, Trans } from "react-i18next";

const Footer = () => {
  const [count, setCount] = useState(0);
  const onChange = () => {
    setCount((prevState) => prevState + 1);
  };

  const { t } = useTranslation();

  return (
    <div className="container mt">
      {/* Footer content here */}
      <p>
        <Trans i18nKey="clickButtonText">
          Let's <strong> click the button </strong> below:
        </Trans>
      </p>
      <button onClick={onChange}>{t("click")}</button>
      <p>{t("clickCount", { count: count })}</p>
    </div>
  );
};

export default Footer;
