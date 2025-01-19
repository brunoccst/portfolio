import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSettings } from 'react-icons/fi';
import './Settings.scss';

const Settings = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <AnimatePresence>
      <motion.button
        className={`settings-button ${isSettingsOpen ? 'active' : ''}`}
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        initial={{ opacity: 0, pointerEvents: 'none' }}
        animate={{ 
          opacity: 1, 
          rotate: isSettingsOpen ? 180 : 0,
          pointerEvents: 'auto'
        }}
        transition={{ 
          opacity: { delay: 4, duration: 0.8 },
          rotate: { duration: 0.3 },
          pointerEvents: { delay: 4 }
        }}
        aria-label="Settings"
      >
        <FiSettings />
      </motion.button>

      <AnimatePresence mode="wait">
        {isSettingsOpen ? (
          <motion.div
            className="settings-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            key="settings"
          >
            <div className="settings-section">
              <label htmlFor="language">{t('settings.language')}</label>
              <select
                id="language"
                value={i18n.language}
                onChange={handleLanguageChange}
              >
                <option value="en">English</option>
                <option value="pt">Português</option>
              </select>
            </div>

            <div className="settings-section">
              <label>{t('settings.theme')}</label>
              <div className="theme-buttons">
                <button
                  className={`theme-button ${theme === 'light' ? 'active' : ''}`}
                  onClick={() => theme === 'dark' && toggleTheme()}
                >
                  {t('settings.light')}
                </button>
                <button
                  className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
                  onClick={() => theme === 'light' && toggleTheme()}
                >
                  {t('settings.dark')}
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </AnimatePresence>
  );
};

export default Settings; 