import { useTranslation } from "react-i18next";
import Section from "../Section";

const Experience = () => {
    const { t } = useTranslation();

    return (
        <Section title={t("experience.title")}>
            <p>{t("experience.description")}</p>
        </Section>
    );
};

export default Experience;