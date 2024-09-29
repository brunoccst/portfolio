import "./Navbar.scss";
import { ModeToggle } from "components/elements/ThemeToggle";
import { LocaleSelector } from "components/elements/LocaleSelector";

export const Navbar = () => {
    return (
        <nav>
            <ModeToggle />
            <LocaleSelector />
        </nav>
    )
}