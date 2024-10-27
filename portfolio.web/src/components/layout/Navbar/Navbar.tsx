import "./Navbar.scss";
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Settings from '@mui/icons-material/Settings';
import Toolbar from '@mui/material/Toolbar';
import { LogoIcon } from "components/elements/LogoIcon";
import { Dialog, DialogContent, DialogTitle, Icon, Typography } from '@mui/material';
import { LocaleSelector } from "components/elements/LocaleSelector";
import { ModeToggle } from "components/elements/ModeToggle";
import { t } from "i18next";

const DrawerBox = () => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Icon sx={{ mt: 1, width: '19px', height: '27px' }}>
                <LogoIcon />
            </Icon>
            <Divider />
            <List>
                <ListItem key="language" disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={"Language"} />
                    </ListItemButton>
                </ListItem>
                <ListItem key="mode" disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={"Mode"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}

export const Navbar = () => {
    const [settingsOpen, setSettingsOpen] = useState(false);

    const handleSettingsClick = () => setSettingsOpen((prevState) => !prevState);

    return (
        <AppBar component="nav">
            <Toolbar>
                <Icon sx={{ width: '19px', height: '27px' }}>
                    <LogoIcon />
                </Icon>
                <Box itemID='settings-box'>
                    <Dialog open={settingsOpen} onClose={handleSettingsClick} hideBackdrop={true}>
                        <DialogTitle>{t('Settings')}</DialogTitle>
                        <DialogContent>
                            <Typography>{t('Language')}</Typography>
                            <LocaleSelector />
                            <Typography>{t('Modo')}</Typography>
                            <ModeToggle />
                        </DialogContent>
                    </Dialog>
                    <Settings onClick={handleSettingsClick} className={settingsOpen ? 'open' : ''}/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}