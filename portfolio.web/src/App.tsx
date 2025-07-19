import Settings from './components/Settings';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Sections from './components/Sections';
import './styles/App.scss';
import { NavigationProvider } from './contexts/NavigationContext';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("document.title");
  }, [t, i18n.language]);
  
  return (
    <NavigationProvider>
      <div className="app">
        <div className="container">
          <Header />
          <Navigation />
          <Sections />
          <Settings />
        </div>
      </div>
    </NavigationProvider>
  );
}

export default App; 