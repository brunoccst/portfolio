import './App.scss';
import { Navbar } from 'components/layout/Navbar';
import { Sidebar } from 'components/layout/Sidebar';
import { WelcomeBanner } from 'components/sections/WelcomeBanner';
import { AboutMe } from 'components/sections/AboutMe'
import { Skills } from 'components/sections/Skills';
import { Experiences } from 'components/sections/Experiences';
import useLocalizeDocumentAttributes from "i18n/useLocalizeDocumentAttributes";
import { Footer } from 'components/layout/Footer';

export const App = () => {
  useLocalizeDocumentAttributes();

  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <WelcomeBanner />
        <AboutMe />
        <Skills />
        <Experiences />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}