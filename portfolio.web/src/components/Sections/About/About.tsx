import { useTranslation, Trans } from "react-i18next";
import Section from "../Section";
import './About.scss';

const About = () => {
    const { t } = useTranslation();

    return (
        <Section title={t("about.title")}>
            <div className="about-description">
                <Trans i18nKey="about.description" components={{
                    i: <i />,
                    b: <b />
                }} />
            </div>
        </Section>
    );
};

export default About;