import "./LocaleSwitcher.scss";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { SupportedLngs } from "i18n/supportedLngs";

interface Language {
    code: string;
    name: string;
}

const SupportedLanguageOption = ({ code, name }: Language) => (
    <option value={code} key={code}>
        {name}
    </option>
);

export const LocaleSwitcher = () => {
    const { i18n } = useTranslation();
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => i18n.changeLanguage(e.target.value);

    return (
        <div className="locale-switcher">
            <select
                value={i18n.resolvedLanguage}
                onChange={onChange}
            >
                {
                    Object.entries(SupportedLngs).map(([code, name]) =>
                        <SupportedLanguageOption key={code} code={code} name={name} />
                    )
                }
            </select>
        </div>
    )
}