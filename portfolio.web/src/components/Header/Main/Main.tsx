import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 4,
        duration: 0.8,
        ease: "easeOut"
      }}
      style={{ top: 20, left: 20 }}
    >
      <div className="text-container">
        <span className="name">Bruno Carvalho da Costa</span>
        <span className="separator">|</span>
        <span className="title">{t('role.title')}</span>
      </div>
    </motion.div>
  );
};

export default Main;