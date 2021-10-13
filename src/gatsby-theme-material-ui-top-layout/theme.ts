import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        colors: {
            yellow: string;
            mainGreen: string;
            pink: string;
            white: string;
            black: string;
        };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
        colors: {
            yellow: string;
            mainGreen: string;
            pink: string;
            white: string;
            black: string;
            darkGreen: string;
        };
    }
}

export const theme = {
    palette: {
        primary: {
            main: '#0D324D'
        },
        secondary: {
            main: '#4990A4'
        },
        text: {
            primary: '#0D324D',
            secondary: '#333333',
            hint: '#4990A4'
        },
        background: {
            default: '#F7F8F9'
        }
    },
    colors: {
        yellow: '#FFDC5F',
        mainGreen: '#4990a4',
        pink: '#4990a4',
        white: '#FFFFFF',
        black: '#0d324d',
        darkGreen: '#09273d'
    },
    typography: {
        fontFamily: [
            'Circluar',
            'Varela Round',
            'Nunito',
            'Poppins',
            'Raleway',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(',')
    }
};

export default createTheme(theme);
