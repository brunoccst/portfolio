import { PropsWithChildren } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
    colorSchemes: {
        light: true,
        dark: true
    },
    components: {
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    gap: '4px',
                    lineHeight: '15px'
                }
            }
        }
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