import React from 'react';
import {TTheme} from "../types";
import {useTheme} from "../hooks/useTheme";
import {useThemeDispatch} from "../hooks/useThemeDispatch";

const ThemesChanger = () => {
    const theme = useTheme();
    const setTheme = useThemeDispatch();
    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setTheme(e.target.value as TTheme);
    }
    return (
        <select onChange={handleChange} value={theme} className="form-select">
            <option value="light">Светлая</option>
            <option value="dark">Темная</option>
        </select>
    );
};

export default ThemesChanger;