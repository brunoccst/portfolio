import { NavigationProvider, useNavigation } from '../../contexts/NavigationContext';
import NavItem from './NavItem';
import sectionComponents from './Sections';
import './Navigation.scss';

const navItems: Record<string, { section: string, label: string }> = {
  about: { section: "about", label: "navigation.about" },
  experience: { section: "experience", label: "navigation.experience" }
};

const NavigationContent = () => {
  const { activeSection } = useNavigation();

  return (
    <>
      <nav className="navigation animate-slide-in-right-delayed">
        <ul>
          {Object.values(navItems).map(({ section, label }) => (
            <NavItem key={section} section={section} label={label} />
          ))}
        </ul>
      </nav>

      {activeSection && (
        <div className="content-card animate-slide-in-left">
          {sectionComponents[activeSection]}
        </div>
      )}
    </>
  );
};

const Navigation = () => {
  return (
    <NavigationProvider>
      <NavigationContent />
    </NavigationProvider>
  );
};

export default Navigation;