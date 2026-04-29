// React Theme — extracted from https://ecommwizards.com
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
 *   };
 *   fonts: {
    body: string;
    heading: string;
 *   };
 *   fontSizes: {
    '15': string;
    '16': string;
    '17': string;
    '18': string;
    '20': string;
    '24': string;
    '25': string;
    '30': string;
    '40': string;
    '42': string;
    '50': string;
    '52': string;
 *   };
 *   space: {
    '2': string;
    '10': string;
    '20': string;
    '24': string;
    '40': string;
    '45': string;
    '60': string;
 *   };
 *   radii: {
    sm: string;
    md: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    xs: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#61ce70",
    "secondary": "#046bd2",
    "accent": "#6ec1e4",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#334155",
    "neutral100": "#ffffff",
    "neutral200": "#000000",
    "neutral300": "#7a7a7a",
    "neutral400": "#69727d",
    "neutral500": "#101010",
    "neutral600": "#fbf7ed",
    "neutral700": "#333333"
  },
  "fonts": {
    "body": "'Nunito', sans-serif",
    "heading": "'Lato', sans-serif"
  },
  "fontSizes": {
    "15": "15px",
    "16": "16px",
    "17": "17px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
    "25": "25px",
    "30": "30px",
    "40": "40px",
    "42": "42px",
    "50": "50px",
    "52": "52px"
  },
  "space": {
    "2": "2px",
    "10": "10px",
    "20": "20px",
    "24": "24px",
    "40": "40px",
    "45": "45px",
    "60": "60px"
  },
  "radii": {
    "sm": "3px",
    "md": "10px",
    "xl": "20px",
    "full": "100px"
  },
  "shadows": {
    "xs": "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#61ce70",
      "light": "hsl(128, 53%, 74%)",
      "dark": "hsl(128, 53%, 44%)"
    },
    "secondary": {
      "main": "#046bd2",
      "light": "hsl(210, 96%, 57%)",
      "dark": "hsl(210, 96%, 27%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#000000"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#334155"
    }
  },
  "typography": {
    "fontFamily": "'Times New Roman', sans-serif",
    "h1": {
      "fontSize": "40px",
      "fontWeight": "600",
      "lineHeight": "50px",
      "fontFamily": "'Lato', sans-serif"
    },
    "h2": {
      "fontSize": "25px",
      "fontWeight": "400",
      "lineHeight": "25px",
      "fontFamily": "'Lato', sans-serif"
    }
  },
  "shape": {
    "borderRadius": 10
  },
  "shadows": [
    "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
  ]
};

export default theme;
