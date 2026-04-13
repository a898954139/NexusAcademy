import React, { useState, useEffect } from 'react';
import { LanguageContext } from './languageContextValue';

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('nexus_lang') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('nexus_lang', language);
    }, [language]);

    const t = (dict) => {
        if (!dict) return '';
        if (dict[language]) return dict[language];
        return dict['en'] || Object.values(dict)[0] || '';
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
