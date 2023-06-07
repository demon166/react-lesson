import {useContext} from "react";
import {ThemeDispatchContext} from "../context/themeContext";

export function useThemeDispatch(){
    return useContext(ThemeDispatchContext);
}