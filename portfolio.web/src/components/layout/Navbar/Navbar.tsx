import "./Navbar.scss";
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Settings from '@mui/icons-material/Settings';
import Toolbar from '@mui/material/Toolbar';
import { LogoIcon } from "components/elements/LogoIcon";
import { Dialog, DialogContent, DialogTitle, Icon, Typography } from '@mui/material';
import { LocaleSelector } from "components/elements/LocaleSelector";
import { ModeToggle } from "components/elements/ModeToggle";
import { t } from "i18next";

export const Navbar = () => {
    const [settingsOpen, setSettingsOpen] = useState(false);

    const handleSettingsClick = () => setSettingsOpen((prevState) => !prevState);

    return (
        <AppBar component="nav">
            <Toolbar>
                <Icon sx={{ width: '19px', height: '27px' }}>
                    <LogoIcon />
                </Icon>
                <Settings onClick={handleSettingsClick} className={settingsOpen ? 'open' : ''} id="settings-icon" />
            </Toolbar>
            <Dialog open={settingsOpen} onClose={handleSettingsClick} hideBackdrop={true}>
                <DialogTitle>{t('Settings')}</DialogTitle>
                <DialogContent>
                    <Typography>{t('Language')}</Typography>
                    <LocaleSelector />
                    <Typography>{t('Modo')}</Typography>
                    <ModeToggle />
                </DialogContent>
            </Dialog>
        </AppBar>
    );
}