import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
    title: string;
  }
  
const Section = ({ title, children }: SectionProps) => {
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  };

export default Section;