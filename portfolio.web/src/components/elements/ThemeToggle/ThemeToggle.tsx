import { useTranslation } from "react-i18next";
import { ToggleButtonGroup, ToggleButton, useColorScheme } from "@mui/material";
import { SettingsBrightness, DarkMode, LightMode } from "@mui/icons-material";

type Theme = 'system' | 'dark' | 'light';

export const ThemeToggle = () => {
    const { t } = useTranslation();
    const { mode, setMode } = useColorScheme();
    
    if (!mode)
        return null;

    const onChange = (_: React.MouseEvent<HTMLElement>, newTheme: Theme | null) => setMode(newTheme ?? 'system');

    return (
        <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={onChange}
            aria-label={t("Theme")}
        >
            <ToggleButton value="system" aria-label={t("System")}>
                <SettingsBrightness />
                <span>{t("System")}</span>
            </ToggleButton>
            <ToggleButton value="dark" aria-label={t("Dark")}>
                <DarkMode />
                <span>{t("Dark")}</span>
            </ToggleButton>
            <ToggleButton value="light" aria-label={t("Light")}>
                <LightMode />
                <span>{t("Light")}</span>
            </ToggleButton>
        </ToggleButtonGroup>
    )
}