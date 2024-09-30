import { Typography } from "@mui/material";
import "./Footer.scss";
import { useTranslation } from "react-i18next"

export const Footer = () => {
    const { t } = useTranslation();

    const year = 2024;

    return (
        <Typography>
            {t("© {{year}} Bruno Carvalho da Costa. All rights reserved", { year })}
        </Typography>
    )
}