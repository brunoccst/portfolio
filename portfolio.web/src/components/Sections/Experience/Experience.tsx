import { useTranslation } from "react-i18next";
import Section from "../Section";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

const Experience = () => {
    const { t } = useTranslation();
    
    const experiences = t("experience.items", { returnObjects: true }) as Array<{
        company: string;
        period: string;
        description: string;
    }>;

    return (
        <Section title={t("experience.title")}>
            {experiences.map((exp, idx) => (
                <ExperienceItem
                    key={exp.company + exp.period + idx}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                />
            ))}
        </Section>
    );
};

export default Experience;