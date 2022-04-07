import React from 'react';
import {
    ColorModeContextProvider
} from './contexts';

export default function GlobalContextProviders({ children }: { children: React.ReactNode }) {
    return (
        <ColorModeContextProvider>
            {children}
        </ColorModeContextProvider>
    );
}