import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  
  return (
    <div className="header animate-slide-in-left-delayed">
      <div className="text-container">
        <span className="name">Bruno Carvalho da Costa</span>
        <span className="separator">|</span>
        <span className="title">{t('role.title')}</span>
      </div>
    </div>
  );
};

export default Main;