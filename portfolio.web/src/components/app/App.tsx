import './App.scss';
import useLocalizeDocumentAttributes from "i18n/useLocalizeDocumentAttributes";
import { Navbar } from 'components/layout/Navbar';
import { Sidebar } from 'components/layout/Sidebar';
import { Footer } from 'components/layout/Footer';
import { WelcomeBanner } from 'components/sections/WelcomeBanner';
import { AboutMe } from 'components/sections/AboutMe'
import { Skills } from 'components/sections/Skills';
import { Experiences } from 'components/sections/Experiences';
import { TimelapseBackground } from 'components/elements/TimelapseBackground';

export const App = () => {
  useLocalizeDocumentAttributes();

  return (
    <>
      <TimelapseBackground />
      <header>
        <Navbar />
      </header>
      <aside>
        {/* <Sidebar /> */}
      </aside>
      <main>
        {/* <WelcomeBanner />
        <AboutMe />
        <Skills />
        <Experiences /> */}
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  )
}