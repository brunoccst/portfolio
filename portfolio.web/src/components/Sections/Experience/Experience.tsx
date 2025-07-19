import { useTranslation } from "react-i18next";
import Section from "../Section";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
    const { t } = useTranslation();

    return (
        <Section title={t("experience.title")}> 
            <ExperienceItem
                company="DocuWare"
                period="2021 - Present"
                description="Team Lead and Software Engineer. Led a team of developers, coordinated agile sprints, and contributed to the design and implementation of new features in our cloud document management platform."
            />
            <ExperienceItem
                company="Company B"
                period="2018 - 2021"
                description="Full Stack Developer. Built and maintained web applications using React and .NET, improved CI/CD pipelines, and mentored junior developers."
            />
            <ExperienceItem
                company="Company C"
                period="2015 - 2018"
                description="Software Engineer. Developed backend services, optimized SQL databases, and collaborated with cross-functional teams to deliver high-quality software."
            />
        </Section>
    );
};

export default Experience;