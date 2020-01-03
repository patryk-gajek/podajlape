import labels from './labels';
import React from 'react';

export const dictionaryList = {
    labels
};

export const languageOptions = [
    { id: 'pl', text: 'PL' },
    { id: 'en', text: 'EN' }
];


export const LanguageContext = React.createContext({
    languageCode: languageOptions[0].id,
    labels: labels
});