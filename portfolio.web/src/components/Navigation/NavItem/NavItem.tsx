import { useTranslation } from 'react-i18next';
import { useNavigation } from '../../../contexts/NavigationContext';
import { SectionType } from '../../../types/sectionType';

interface NavItemProps {
  section: SectionType;
  label: string;
}

const NavItem = ({ section, label }: NavItemProps) => {
  const { activeSection, setActiveSection } = useNavigation();
  const { t } = useTranslation();

  const className = activeSection === section ? 'active' : '';
  const handleClick = () => setActiveSection(activeSection === section ? null : section);

  return (
    <li>
      <button className={className} onClick={handleClick}>
        {t(label)}
      </button>
    </li>
  );
};

export default NavItem;