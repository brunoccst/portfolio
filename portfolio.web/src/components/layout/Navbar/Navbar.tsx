import "./Navbar.scss";
import { LocaleSwitcher } from "components/elements/LocaleSwitcher";

export const Navbar = () => {
    return (
        <nav>
            <LocaleSwitcher />
        </nav>
    )
}