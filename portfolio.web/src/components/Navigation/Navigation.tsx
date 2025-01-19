import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Navigation.scss';

type Section = 'about' | 'experience' | null;

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<Section>(null);
  const { t } = useTranslation();

  return (
    <>
      <motion.nav 
        className="navigation"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          delay: 4,
          duration: 0.8,
          ease: "easeOut"
        }}
      >
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
      </motion.nav>

        {activeSection && (
          <motion.div 
            className="content-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            key={activeSection}
          >
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
          </motion.div>
        )}
    </>
  );
};

export default Navigation; 