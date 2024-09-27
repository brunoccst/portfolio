import "./Navbar.scss";
import { ThemeToggle } from "components/elements/ThemeToggle";
import { LocaleSelector } from "components/elements/LocaleSelector";

export const Navbar = () => {
    return (
        <nav>
            <ThemeToggle />
            <LocaleSelector />
        </nav>
    )
}