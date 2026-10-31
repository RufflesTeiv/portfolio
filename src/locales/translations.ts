const en = {
    whatsAppMessage: "Hello!"
}

export type TranslationKey = typeof translations.en;

export const translations = {
    en,
    pt: {
        whatsAppMessage: "Ol%C3%A1!"
    },
    fr: {
        whatsAppMessage: "Bonjour!"
    },
    es: {
        whatsAppMessage: "Hola!"
    }
} as const;

export type Language = keyof typeof translations;