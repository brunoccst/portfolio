import { Experiences } from 'components/experiences/Experiences';
import './App.scss'
import { AboutMe } from 'components/about-me'
import { Header } from 'components/header';
import { Skills } from 'components/skills';
import { WelcomeBanner } from 'components/welcome-banner';
import useLocalizeDocumentAttributes from "i18n/use-localize-document-attributes";

export const App = () => {
  useLocalizeDocumentAttributes();

  return (
    <div className="app">
      <main>
        <Header />
        <WelcomeBanner />
        <AboutMe />
        <Skills />
        <Experiences />
      </main>
    </div>
  )
}