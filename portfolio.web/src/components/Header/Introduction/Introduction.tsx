import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      className="header center"
      initial={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      animate={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key="center-header"
    >
      <motion.div className="text-container">
        <motion.span
          className="name"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: [0, 1, 1, 0], x: [20, 0, 0, 20] }}
          transition={{
            duration: 3,
            times: [0, 0.2, 0.8, 1],
            ease: "easeInOut",
            delay: 1
          }}
        >
          Bruno Carvalho da Costa
        </motion.span>

        <motion.span
          className="separator"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 5,
            times: [0, 0.2, 0.8, 1],
            ease: "easeInOut"
          }}
        >
          |
        </motion.span>

        <motion.span
          className="title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, -20] }}
          transition={{
            duration: 3,
            times: [0, 0.2, 0.8, 1],
            ease: "easeInOut",
            delay: 1
          }}
        >
          {t('role.title')}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Introduction;