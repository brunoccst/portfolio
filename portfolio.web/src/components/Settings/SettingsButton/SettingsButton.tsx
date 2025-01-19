import { motion } from 'framer-motion';
import { FiSettings } from 'react-icons/fi';
import { useSettings } from '../../../contexts/SettingsContext';
import './SettingsButton.scss';

const SettingsButton = () => {
  const { isSettingsOpen, toggleSettings } = useSettings();

  return (
    <motion.button
      className={`settings-button ${isSettingsOpen ? 'active' : ''}`}
      onClick={toggleSettings}
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
  );
};

export default SettingsButton; 