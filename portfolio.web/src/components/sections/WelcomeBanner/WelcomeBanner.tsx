import "./WelcomeBanner.scss";
import { useTranslation } from "react-i18next";

export const WelcomeBanner = () => {
    const { t } = useTranslation();

    return (
        <section aria-labelledby="welcome-title">
            <h1 id="welcome-title">{t("Welcome")}</h1>
            <p>I'm happy that you landed on my portfolio.</p>
        </section>
    )
}