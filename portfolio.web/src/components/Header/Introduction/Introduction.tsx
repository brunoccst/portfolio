import { useTranslation } from 'react-i18next';

const Introduction = () => {
  const { t } = useTranslation();
  
  return (
    <div className="header center">
      <div className="text-container">
        <span className="name animate-slide-from-right">
          Bruno Carvalho da Costa
        </span>

        <span className="separator animate-fade">
          |
        </span>

        <span className="title animate-slide-from-left">
          {t('role.title')}
        </span>
      </div>
    </div>
  );
};

export default Introduction;