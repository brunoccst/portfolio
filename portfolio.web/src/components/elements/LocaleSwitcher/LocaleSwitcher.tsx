import "./LocaleSwitcher.scss";
import { useTranslation } from "react-i18next";
import { Language, SupportedLngs } from "i18n/supportedLngs";
import { Autocomplete, AutocompleteRenderInputParams, TextField } from "@mui/material";

const RenderInput = (params: AutocompleteRenderInputParams) => {
    const { t } = useTranslation();
    return <TextField {...params} label={t("Language")} />
}

export const LocaleSwitcher = () => {
    const { i18n } = useTranslation();

    const value = SupportedLngs.find(x => x.isoCode === i18n.resolvedLanguage);
    const getOptionLabel = ({ name }: Language) => name;
    const onChange = (_: any, newValue: Language | null) => i18n.changeLanguage(newValue?.isoCode);

    return (
        <Autocomplete
            disablePortal
            options={SupportedLngs}
            getOptionLabel={getOptionLabel}
            value={value}
            renderInput={RenderInput}
            onChange={onChange}
        />
    )
}