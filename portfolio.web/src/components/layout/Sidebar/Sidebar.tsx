import './Sidebar.scss';
import { useTranslation } from 'react-i18next';
import { Paper } from '@mui/material';
import headshot from "assets/headshot.jpg";

export const Sidebar = () => {
    const { t } = useTranslation();

    return (
        <Paper itemID='sidebar'>
            <img src={headshot} aria-label={t("Headshot")}/>
        </Paper>
    )
}