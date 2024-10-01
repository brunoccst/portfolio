import "./TimelapseBackground.scss";
import { useColorScheme } from "@mui/material";
import Mountain from "assets/mountain.png";

export const TimelapseBackground = () => {
    const { mode, systemMode } = useColorScheme();
    const isDarkMode = systemMode === "dark" || mode === "dark";

    return (
        <div id="timelapse-background" className={isDarkMode ? "dark" : ""}>
            <img src={Mountain} />
        </div>
    );
};