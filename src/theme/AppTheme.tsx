import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import theme from "./theme"

interface ThemeProps {

    children:JSX.Element;

}



export const AppTheme = ({ children }:ThemeProps) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
