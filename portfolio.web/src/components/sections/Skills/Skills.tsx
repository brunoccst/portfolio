import "./Skills.scss";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">{t("Skills")}</h2>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>C#</li>
      </ul>
    </section>
  );
}