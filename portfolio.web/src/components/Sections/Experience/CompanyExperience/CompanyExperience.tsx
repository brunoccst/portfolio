import ExperienceItem from "../ExperienceItem";
import './CompanyExperience.scss';

interface Role {
  title: string;
  period: string;
  description: string;
}

interface CompanyExperienceProps {
  company: string;
  roles: Role[];
}

const CompanyExperience = ({ company, roles }: CompanyExperienceProps) => (
  <div className="company-experience">
    <h3 className="company-name">{company}</h3>
    {roles.map((role, idx) => (
      <ExperienceItem
        key={role.title + role.period + idx}
        company={role.title}
        period={role.period}
        description={role.description}
      />
    ))}
  </div>
);

export default CompanyExperience;