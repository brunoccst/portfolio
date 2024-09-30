import { Paper } from '@mui/material';
import './Sidebar.scss';
import { useTranslation } from 'react-i18next';

export const Sidebar = () => {
    const { t } = useTranslation();

    return (
        <Paper>
            <nav>
                <ul>
                    <li><a href="#about-me">{t("About Me")}</a></li>
                    <li><a href="#skills">{t("Skills")}</a></li>
                    <li><a href="#experience">{t("Experience")}</a></li>
                </ul>
            </nav>
        </Paper>
    )
}