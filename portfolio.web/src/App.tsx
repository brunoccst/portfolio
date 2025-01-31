import Settings from './components/Settings';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Sections from './components/Sections';
import './styles/App.scss';
import { NavigationProvider } from './contexts/NavigationContext';

function App() {
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