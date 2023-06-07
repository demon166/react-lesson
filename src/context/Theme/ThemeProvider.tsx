import React, {ReactElement, useState} from 'react';
import {ThemeContext, ThemeDispatchContext} from './themeContext';
import {TTheme} from "../../types";

interface ThemeProviderProps {
    children: ReactElement;
}
const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<TTheme>("dark")

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeDispatchContext.Provider value={setTheme}>
                {children}
            </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;