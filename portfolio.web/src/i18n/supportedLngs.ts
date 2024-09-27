export interface Language {
    isoCode: string;
    name: string;
}

type SupportedLanguages = Language[];

export const SupportedLngs: SupportedLanguages = [
    { isoCode: "en-US", name: "English" },
    { isoCode: "pt-BR", name: "Português brasileiro" }
]