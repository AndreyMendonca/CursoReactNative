import { Children, createContext, useReducer, useState } from "react";
import { User } from "../types/user";

type ThemeContextType = null | {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>(null);

type Props = {
    children : React.ReactNode;
}

export const ThemeProvider = ({children}:Props) => {

    const [theme, setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
