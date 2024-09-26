import "./Header.scss";
import { LocaleSwitcher } from "components/locale-switcher";

export const Header = () => {
    return (
        <header>
            <nav>
                <LocaleSwitcher />
            </nav>
        </header>
    )
}