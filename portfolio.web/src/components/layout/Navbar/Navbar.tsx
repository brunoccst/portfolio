import "./Navbar.scss";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppBar } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { ModeToggle } from "components/elements/ModeToggle";
import { LocaleSelector } from "components/elements/LocaleSelector";
import Logo from "assets/logo.png";

export const Navbar = () => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState<boolean>(false);
    const settingsContainerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const onClick = (ev: MouseEvent) => {
            if (settingsContainerRef.current?.contains(ev.target as Node))
                return;
                
            setExpanded(false);
        };

        if (expanded)
            document.addEventListener('click', onClick);
        else
            document.removeEventListener('click', onClick)

        return () => document.removeEventListener('click', onClick);
    }, [expanded])

    const toggleExpanded = (ev: React.MouseEvent) => {
        ev.stopPropagation();
        setExpanded(!expanded)
    };

    const expandedClass = expanded ? "expanded" : "";

    return (
        <AppBar>
            <nav className={`navbar ${expandedClass}`}>
                <img src={Logo} id="logo" />
                <span className="settings-container" ref={settingsContainerRef}>
                    <span className="settings-container-inner">
                        <LocaleSelector />
                        <ModeToggle />
                    </span>
                    <Settings
                        onClick={toggleExpanded}
                        aria-label={t("Settings")}
                        id="settings-icon"
                    />
                </span>
            </nav>
        </AppBar>
    )
}