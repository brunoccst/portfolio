import { SettingsProvider } from '../../contexts/SettingsContext';
import SettingsButton from './SettingsButton/SettingsButton';
import SettingsContent from './SettingsContent/SettingsContent';

const Settings = () => {
  return (
    <SettingsProvider>
      <SettingsButton />
      <SettingsContent />
    </SettingsProvider>
  );
};

export default Settings; 