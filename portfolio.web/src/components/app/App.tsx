import './App.scss'
import { AboutMe } from 'components/about-me'
import { Header } from 'components/header';
import { useTranslation } from "react-i18next";

export const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <h2>{t("Welcome")}</h2>
      <AboutMe />
    </>
  )
}