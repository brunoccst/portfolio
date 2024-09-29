import { PropsWithChildren } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
    colorSchemes: {
        light: true,
        dark: true
    }
});

export const MUIThemeWrapper = ({ children }: PropsWithChildren) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}