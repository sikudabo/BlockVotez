import React, { createContext, useContext, useState } from 'react';

/**
 * ColorModeStateContextType will store a string value 
 * for what the color mode should be. localStorage will
 * be used to track this once the user is logged in. 
 */
export type ColorModeStateContextType = {
    mode: 'light' | 'dark';
}

export type ColorModeUpdateContextType = {
    setMode: React.Dispatch<React.SetStateAction<"light" | "dark">> | null;
}

const ColorModeStateContext = createContext<ColorModeStateContextType>({ mode: 'light' });
const ColorModeUpdateContext = createContext<any>({});

function ColorModeContextProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    return (
        <ColorModeStateContext.Provider 
            value={{ mode }}
        >
            <ColorModeUpdateContext.Provider 
                value={{ setMode }}
            >
                {children}
            </ColorModeUpdateContext.Provider>
        </ColorModeStateContext.Provider>
    );
}

function useColorModeState() {
    const context = useContext(ColorModeStateContext);
    return context;
}

function useColorModeUpdate() {
    const context = useContext(ColorModeUpdateContext);
    return context;
}

export { ColorModeContextProvider, useColorModeState, useColorModeUpdate };