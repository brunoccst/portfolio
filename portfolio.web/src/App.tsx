import Settings from './components/Settings';
import Header from './components/Header';
import Navigation from './components/Navigation';
import './styles/App.scss';
import { SettingsProvider } from './contexts/SettingsContext';

function App() {
  return (
    <SettingsProvider>
      <div className="app">
        <div className="container">
          <Header />
          <Navigation />
          <Settings />
        </div>
      </div>
    </SettingsProvider>
  );
}

export default App; 