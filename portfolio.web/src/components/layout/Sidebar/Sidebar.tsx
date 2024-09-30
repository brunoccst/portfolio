import './Sidebar.scss';
import { useTranslation } from 'react-i18next';
import { Paper } from '@mui/material';
import Headshot from "assets/headshot.jpg";

export const Sidebar = () => {
    const { t } = useTranslation();

    return (
        <Paper itemID='sidebar'>
            <img src={Headshot} aria-label={t("Headshot")}/>
        </Paper>
    )
}