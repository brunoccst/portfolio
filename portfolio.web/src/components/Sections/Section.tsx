import { PropsWithChildren } from 'react';
import { FiX } from 'react-icons/fi';
import { useNavigation } from '../../contexts/NavigationContext';
import './Section.scss';

interface SectionProps extends PropsWithChildren {
    title: string;
}
  
const Section = ({ title, children }: SectionProps) => {
    const { setActiveSection } = useNavigation();

    return (
      <div className="section">
        <div className="section-header">
          <h2>{title}</h2>
          <button 
            className="close-button" 
            onClick={() => setActiveSection(null)}
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>
        {children}
      </div>
    );
};

export default Section;