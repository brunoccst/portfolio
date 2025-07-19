import { PropsWithChildren } from "react";
import './ExperienceItem.scss';

interface ExperienceItemProps extends PropsWithChildren {
  company: string;
  period: string;
  description: string;
}

const ExperienceItem = ({ company, period, description, children }: ExperienceItemProps) => (
  <div className="experience-item">
    <div className="experience-header">
      <h3 className="company">{company}</h3>
      <span className="period">{period}</span>
    </div>
    <p className="description">{description}</p>
    {children}
  </div>
);

export default ExperienceItem;