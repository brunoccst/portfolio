import './App.scss'
import { AboutMe } from 'components/about-me'
import { useTranslation } from "react-i18next";

export const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("Welcome")}</h2>
      <AboutMe />
    </>
  )
}