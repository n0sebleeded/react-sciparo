import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./redux/store.ts";
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";

// Создание темы с дополнительными цветами
export const theme = createTheme({
    palette: {
        primary: {
            main: '#FFDE09',
            dark: '#FFD500',
        },
        secondary: {
            main: '#242424',
            dark: '#1A1A1A',
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: '#FFD500',
                    borderBottomColor: '#1A1A1A',
                    backgroundColor: '#242424',
                    fontSize: '14pt',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1A1A1A'
                }
            }
        }
    }
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  /*<React.StrictMode>*/
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
  /*</React.StrictMode>*/
)
