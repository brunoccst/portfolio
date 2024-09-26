import './App.scss'
import { useTranslation } from "react-i18next";
import { AboutMe } from 'components/about-me'
import { Header } from 'components/header';
import useLocalizeDocumentAttributes from "i18n/use-localize-document-attributes";

export const App = () => {
  const { t } = useTranslation();
  useLocalizeDocumentAttributes();
  
  return (
    <>
      <Header />
      <h2>{t("Welcome")}</h2>
      <AboutMe />
    </>
  )
}