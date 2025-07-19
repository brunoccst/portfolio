import { ReactNode } from 'react';
import { useNavigation } from '../../contexts/NavigationContext';
import { SectionType } from '../../types/sectionType';
import About from './About';
import Experience from './Experience';
import Links from './Links';

const sectionComponents: Record<SectionType, ReactNode> = {
    about: <About />,
    experience: <Experience />,
    links: <Links />
};

const Sections = () => {
  const { activeSection } = useNavigation();
  
  if (!activeSection) return null;
  
  return (
    <div className="sections-card animate-slide-in-left">
      {sectionComponents[activeSection]}
    </div>
  );
};

export default Sections;
