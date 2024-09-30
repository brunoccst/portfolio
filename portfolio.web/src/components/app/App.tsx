import './App.scss';
import { Navbar } from 'components/layout/Navbar';
import { Sidebar } from 'components/layout/Sidebar';
import { Footer } from 'components/layout/Footer';
import { WelcomeBanner } from 'components/sections/WelcomeBanner';
import { AboutMe } from 'components/sections/AboutMe'
import { Skills } from 'components/sections/Skills';
import { Experiences } from 'components/sections/Experiences';
import useLocalizeDocumentAttributes from "i18n/useLocalizeDocumentAttributes";
import { Paper } from '@mui/material';

export const App = () => {
  useLocalizeDocumentAttributes();

  return (
    <>
      <Navbar />
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Paper>
          <WelcomeBanner />
          <AboutMe />
          <Skills />
          <Experiences />
        </Paper>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}