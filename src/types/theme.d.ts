// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createTheme } from '@mui/material';
declare module '@mui/material/styles' {
  interface Palette {
    colorBlack: Palette['primary'];
    colorRed: Palette['primary'];
    colorOrange: Palette['primary'];
    colorGrey: Palette['primary'];
    colorLightBlue: Palette['primary'];
    colorBlue: Palette['primary'];
    beige: Palette['primary'];
  }

  interface PaletteOptions {
    colorBlack?: PaletteOptions['primary'];
    colorRed?: PaletteOptions['primary'];
    colorOrange?: PaletteOptions['primary'];
    colorGrey?: PaletteOptions['primary'];
    colorLightBlue?: PaletteOptions['primary'];
    colorBlue?: PaletteOptions['primary'];
    beige?: PaletteOptions['primary'];
  }
}
