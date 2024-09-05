import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    ThemeMode: "light",
    Darktheme: () => {},
    Lighttheme: () => {},

})

export const ThemePovider = ThemeContext.Provider

export default function useTheme () {
    return useContext(ThemeContext)
}