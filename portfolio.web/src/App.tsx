import Settings from './components/Settings';
import Header from './components/Header';
import Navigation from './components/Navigation';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Navigation />
        <Settings />
      </div>
    </div>
  );
}

export default App; 