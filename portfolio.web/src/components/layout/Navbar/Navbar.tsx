import "./Navbar.scss";
import { LocaleSelector } from "components/elements/LocaleSelector";

export const Navbar = () => {
    return (
        <nav>
            <LocaleSelector />
        </nav>
    )
}