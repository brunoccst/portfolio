import "./Navbar.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppBar } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { ModeToggle } from "components/elements/ModeToggle";
import { LocaleSelector } from "components/elements/LocaleSelector";
import Logo from "assets/logo.png";

export const Navbar = () => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState<boolean>(false);

    const toggleExpanded = () => setExpanded(!expanded);
    const expandedClass = expanded ? "expanded" : "";

    return (
        <AppBar>
            <nav className={`navbar ${expandedClass}`}>
                <img src={Logo} id="logo" />
                <span className="settings-container">
                    <span className="settings-container-inner">
                        <LocaleSelector />
                        <ModeToggle />
                    </span>
                    <Settings onClick={toggleExpanded} aria-label={t("Settings")} id="settings-icon" />
                </span>
            </nav>
        </AppBar>
    )
}