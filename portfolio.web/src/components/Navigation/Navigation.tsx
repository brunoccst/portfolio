import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navigation.scss';

type Section = 'about' | 'experience' | null;

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<Section>(null);
  const { t } = useTranslation();

  return (
    <>
      <nav className="navigation animate-slide-in-right-delayed">
        <ul>
          <li>
            <button 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => setActiveSection(activeSection === 'about' ? null : 'about')}
            >
              {t('navigation.about')}
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={() => setActiveSection(activeSection === 'experience' ? null : 'experience')}
            >
              {t('navigation.experience')}
            </button>
          </li>
        </ul>
      </nav>

      {activeSection && (
        <div className="content-card animate-slide-in-left-delayed">
          {activeSection === 'about' && (
            <div className="about-section">
              <h2>{t('about.title')}</h2>
              <p>{t('about.description')}</p>
            </div>
          )}
          {activeSection === 'experience' && (
            <div className="experience-section">
              <h2>{t('experience.title')}</h2>
              <p>{t('experience.description')}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navigation; 