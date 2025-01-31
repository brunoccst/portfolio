import { useTranslation } from "react-i18next";
import Section from "../Section";

const About = () => {
    const { t } = useTranslation();

    return (
        <Section title={t("about.title")}>
            <p>{t("about.description")}</p>
        </Section>
    );
};

export default About;