import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import { useSettings } from '../../../contexts/SettingsContext';
import './SettingsContent.scss';

const SettingsContent = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { isSettingsOpen } = useSettings();

  const handleLanguageChange = async (event: React.ChangeEvent<HTMLSelectElement>) =>
    await i18n.changeLanguage(event.target.value);

  if (!isSettingsOpen) return null;
  
  return (
    <motion.div
        className="settings-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
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
  );
};

export default SettingsContent; 