import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            background: string,
            green: string,
            backgroundHeader: string,

            blueLight: string,

            textTitle: string,
            textBody: string,
            
            shape: string,
    }
    }
}