import { useTranslation } from 'react-i18next';
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
    <div className="settings-content animate-slide-in-left">
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
    </div>
  );
};

export default SettingsContent; 