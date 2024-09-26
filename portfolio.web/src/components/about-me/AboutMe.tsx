import { useTranslation } from "react-i18next";
import "./AboutMe.scss";

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="about-me" aria-labelledby="about-me-title">
      <h2 id="about-me-title">{t("About me")}</h2>
      <article>
        <img src="" />
        <p>Lorem ipsum</p>
      </article>
    </section>
  );
}