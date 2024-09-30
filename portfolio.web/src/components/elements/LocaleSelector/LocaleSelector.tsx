import "./LocaleSelector.scss";
import { SyntheticEvent } from "react";
import { useTranslation } from "react-i18next";
import { Language, SupportedLngs } from "i18n/supportedLngs";
import { Autocomplete, AutocompleteRenderInputParams, TextField } from "@mui/material";
import { Language as LanguageIcon } from "@mui/icons-material";

const RenderInput = (params: AutocompleteRenderInputParams) => {
    const { t } = useTranslation();

    return (
        <>
            <LanguageIcon aria-label={t("Language icon")} />
            <TextField {...params} aria-label={t("Language input")} />
        </>
    )
}

export const LocaleSelector = () => {
    const { i18n, t } = useTranslation();

    const value = SupportedLngs.find(x => x.isoCode === i18n.resolvedLanguage);
    const getOptionLabel = ({ name }: Language) => name;
    const onChange = (ev: SyntheticEvent, newValue: Language | null) => {
        ev.stopPropagation();
        i18n.changeLanguage(newValue?.isoCode)
    };

    return (
        <>
            <Autocomplete
                aria-label={t("Language")}
                disablePortal
                options={SupportedLngs}
                getOptionLabel={getOptionLabel}
                value={value}
                renderInput={RenderInput}
                onChange={onChange}
                itemID="locale-selector"
                size="small"
            />
        </>
    )
}