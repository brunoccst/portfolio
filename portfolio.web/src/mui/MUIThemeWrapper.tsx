import { PropsWithChildren } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    colorSchemes: {
        light: true,
        dark: true
    },
    cssVariables: {
        colorSchemeSelector: 'class'
    }
});

export const MUIThemeWrapper = ({ children }: PropsWithChildren) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}