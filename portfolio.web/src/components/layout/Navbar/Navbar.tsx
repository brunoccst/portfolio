import "./Navbar.scss";
import { ModeToggle } from "components/elements/ThemeToggle";
import { LocaleSelector } from "components/elements/LocaleSelector";
import { AppBar } from "@mui/material";

export const Navbar = () => {
    return (
        <AppBar>
            <nav className="navbar">
                <LocaleSelector />
                <ModeToggle />
            </nav>
        </AppBar>
    )
}