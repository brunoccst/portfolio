import "./Experiences.scss";
import { useTranslation } from "react-i18next";

export const Experiences = () => {
    const { t } = useTranslation();

    return (
        <section id="experiences" aria-labelledby="experiences-title">
            <h2 id="experiences-title">{t("Experiences")}</h2>
            <article>
                <h3>Company Name</h3>
                <p>Projects and roles description</p>
            </article>
        </section>
    );
}