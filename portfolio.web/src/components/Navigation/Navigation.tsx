import { SectionType } from '../../types/sectionType';
import NavItem from './NavItem';
import './Navigation.scss';

const navItems: Record<string, { section: SectionType; label: string }> = {
  about: { section: 'about', label: 'navigation.about' },
  experience: { section: 'experience', label: 'navigation.experience' },
  links: { section: 'links', label: 'Links' }
};

const Navigation = () => {
  return (
    <nav className="navigation animate-slide-in-right-delayed">
      <ul>
        {Object.values(navItems).map(({ section, label }) => (
          <NavItem key={section} section={section} label={label} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;