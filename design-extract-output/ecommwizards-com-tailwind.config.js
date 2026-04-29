/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(NaN, NaN%, 97%)',
            '100': 'hsl(NaN, NaN%, 94%)',
            '200': 'hsl(NaN, NaN%, 86%)',
            '300': 'hsl(NaN, NaN%, 76%)',
            '400': 'hsl(NaN, NaN%, 64%)',
            '500': 'hsl(NaN, NaN%, 50%)',
            '600': 'hsl(NaN, NaN%, 40%)',
            '700': 'hsl(NaN, NaN%, 32%)',
            '800': 'hsl(NaN, NaN%, 24%)',
            '900': 'hsl(NaN, NaN%, 16%)',
            '950': 'hsl(NaN, NaN%, 10%)',
            DEFAULT: '#61ce70'
        },
        secondary: {
            '50': 'hsl(NaN, NaN%, 97%)',
            '100': 'hsl(NaN, NaN%, 94%)',
            '200': 'hsl(NaN, NaN%, 86%)',
            '300': 'hsl(NaN, NaN%, 76%)',
            '400': 'hsl(NaN, NaN%, 64%)',
            '500': 'hsl(NaN, NaN%, 50%)',
            '600': 'hsl(NaN, NaN%, 40%)',
            '700': 'hsl(NaN, NaN%, 32%)',
            '800': 'hsl(NaN, NaN%, 24%)',
            '900': 'hsl(NaN, NaN%, 16%)',
            '950': 'hsl(NaN, NaN%, 10%)',
            DEFAULT: '#046bd2'
        },
        accent: {
            '50': 'hsl(NaN, NaN%, 97%)',
            '100': 'hsl(NaN, NaN%, 94%)',
            '200': 'hsl(NaN, NaN%, 86%)',
            '300': 'hsl(NaN, NaN%, 76%)',
            '400': 'hsl(NaN, NaN%, 64%)',
            '500': 'hsl(NaN, NaN%, 50%)',
            '600': 'hsl(NaN, NaN%, 40%)',
            '700': 'hsl(NaN, NaN%, 32%)',
            '800': 'hsl(NaN, NaN%, 24%)',
            '900': 'hsl(NaN, NaN%, 16%)',
            '950': 'hsl(NaN, NaN%, 10%)',
            DEFAULT: '#6ec1e4'
        },
        'neutral-50': '#334155',
        'neutral-100': '#ffffff',
        'neutral-200': '#000000',
        'neutral-300': '#7a7a7a',
        'neutral-400': '#69727d',
        'neutral-500': '#101010',
        'neutral-600': '#fbf7ed',
        'neutral-700': '#333333',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Poppins',
            'sans-serif'
        ],
        body: [
            'Nunito',
            'sans-serif'
        ],
        heading: [
            'Lato',
            'sans-serif'
        ]
    },
    fontSize: {
        '11': [
            '11px',
            {
                lineHeight: '25px'
            }
        ],
        '13': [
            '13px',
            {
                lineHeight: '23px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '22px'
            }
        ],
        '15': [
            '15px',
            {
                lineHeight: '25px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '17': [
            '17px',
            {
                lineHeight: '27px'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '28px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '30px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '31.2px'
            }
        ],
        '25': [
            '25px',
            {
                lineHeight: '25px'
            }
        ],
        '30': [
            '30px',
            {
                lineHeight: '30px'
            }
        ],
        '40': [
            '40px',
            {
                lineHeight: '50px'
            }
        ],
        '42': [
            '42px',
            {
                lineHeight: '52px'
            }
        ],
        '50': [
            '50px',
            {
                lineHeight: '50px'
            }
        ],
        '52': [
            '52px',
            {
                lineHeight: '62px'
            }
        ]
    },
    spacing: {
        '1': '2px',
        '5': '10px',
        '10': '20px',
        '12': '24px',
        '20': '40px',
        '30': '60px',
        '45px': '45px'
    },
    borderRadius: {
        sm: '3px',
        md: '10px',
        xl: '20px',
        full: '100px'
    },
    boxShadow: {
        xs: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
    },
    screens: {
        md: '769px',
        '922px': '922px',
        lg: '1025px'
    },
    transitionDuration: {
        '200': '0.2s',
        '250': '0.25s',
        '300': '0.3s',
        '400': '0.4s',
        '1000': '1s'
    },
    transitionTimingFunction: {
        linear: 'linear',
        default: 'ease'
    },
    container: {
        center: true,
        padding: '20px'
    },
    maxWidth: {
        container: '100%'
    }
},
  },
};
