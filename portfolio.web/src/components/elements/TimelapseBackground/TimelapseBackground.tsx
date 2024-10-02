import "./TimelapseBackground.scss";
import { useEffect, useState } from "react";
import { useColorScheme } from "@mui/material";
import Mountain from "assets/mountain.png";

export const TimelapseBackground = () => {
    const { mode, systemMode } = useColorScheme();
    const [transitionEnabled, setTransitionEnabled] = useState(false);
    const isDarkMode = systemMode === "dark" || mode === "dark";

    // Enable transitions after the component mounts
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTransitionEnabled(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            id="timelapse-background"
            className={`${isDarkMode ? "dark" : ""} ${transitionEnabled ? "transition-enabled" : ""}`}
        >
            <img src={Mountain} />
        </div>
    );
};
