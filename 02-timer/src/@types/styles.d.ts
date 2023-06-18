import "styled-components";
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme;

declare module 'style-componentes' {
    export interface DefaultTheme extends ThemeType {}
}