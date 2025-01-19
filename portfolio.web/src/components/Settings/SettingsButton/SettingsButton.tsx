import { FiSettings } from 'react-icons/fi';
import { useSettings } from '../../../contexts/SettingsContext';
import './SettingsButton.scss';

const SettingsButton = () => {
  const { isSettingsOpen, toggleSettings } = useSettings();

  return (
    <button
      className={`settings-button animate-slide-in-right-delayed ${isSettingsOpen ? 'active' : ''}`}
      onClick={toggleSettings}
      aria-label="Settings"
    >
      <FiSettings />
    </button>
  );
};

export default SettingsButton;