import { useTranslation } from "react-i18next";
import Section from "../Section";
import CompanyExperience from "./CompanyExperience";

const Experience = () => {
    const { t } = useTranslation();
    const companies = t("experience.companies", { returnObjects: true }) as Array<{
        company: string;
        roles: Array<{
            title: string;
            period: string;
            description: string;
        }>;
    }>;

    return (
        <Section title={t("experience.title")}>
            {companies.map((comp, idx) => (
                <CompanyExperience
                    key={comp.company + idx}
                    company={comp.company}
                    roles={comp.roles}
                />
            ))}
        </Section>
    );
};

export default Experience;