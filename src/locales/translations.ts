const en = {
    section: {
        key: "Key"
    }
}

export type TranslationKey = typeof translations.en;

export const translations = {
    en,
    pt: {
        section: {
            key: "Chave"
        }
    },
    fr: {
        section: {
            key: "Clé"
        }
    },
    es: {
        section: {
            key: "Llave"
        }
    }
} as const;

export type Language = keyof typeof translations;