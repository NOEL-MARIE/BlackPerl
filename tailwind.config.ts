// const animate = require('tailwindcss-animate')
// import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xs: '425px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        cinzel:["Cinzel", 'sans-serif' ],
        Roboto:["Roboto", 'sans-serif' ],
        Opensans: ["Open Sans", 'sans-serif' ],
        poppins :["Poppins", 'sans-serif' ],
        HouseOfCardsW03Bold :['HouseOfCardsW03Bold', 'cursive']
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        amber: {
          '10': '#BF360C',  // Rouge-brun
          '20': '#E65100',  // Orange foncé
          '30': '#FF6F00',  // Orange vif
          '40': '#FF8F00',  // Orange-ambre
          '50': '#FFA000',  // Ambre standard
          '60': '#FFB300',  // Jaune doré
          '70': '#FFD54F',  // Jaune clair
          '80': '#FFE082',  // Jaune pâle
          '90': '#FFECB3',  // Jaune crème
          '100': '#FFF8E1', // Jaune très clair
        },
        primary: {
          '10': '#2E176E',
          '20': '#442685',
          '30': '#633DA5',
          '40': '#8559C5',
          '50': '#AB7AE6',
          '60': '#C59BF0',
          '70': '#D7B1F7',
          '80': '#F5E5FD',
          '90': '#FBEFFE',
          '100': '#FEFAFE',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        neutral: {
          '10': '#1A1A1A',
          '20': '#666666',
          '30': '#808080',
          '40': '#999999',
          '50': '#B3B3B3',
          '60': '#CCCCCC',
          '70': '#EEEEEE',
          '80': '#F5F5F5',
          '90': '#FAFAFA',
          '100': '#FFFFFF',
        },
        teal: {
          '10': '#004D40',
          '20': '#06695C',
          '30': '#00796B',
          '40': '#00897B',
          '50': '#009688',
          '60': '#26A69A',
          '70': '#4DB6AC',
          '80': '#80CBC4',
          '90': '#B2DFDB',
          '100': '#E0F2F1',
        },
        indigo: {
          '10': '#0D153B',
          '20': '#1A237E',
          '30': '#283593',
          '40': '#303F9F',
          '50': '#3949AB',
          '60': '#3F51B5',
          '70': '#7986CB',
          '80': '#9FA8DA',
          '90': '#C5CAE9',
          '100': '#E8EAF6',
        },
        coral: {
          '10': '#BF360C',
          '20': '#DB4315',
          '30': '#E64A19',
          '40': '#F4511E',
          '50': '#FF5722',
          '60': '#FF7043',
          '70': '#FFB399',
          '80': '#FFCCB3',
          '90': '#FFE0CC',
          '100': '#FFF1E0',
        },
        success: {
          '500': '#4CAF50',
          dark: '#388E3C',
          light: {
            '1': '#81C784',
            '2': '#A5D6A7',
            '3': '#C8E6C9',
          },
        },
        warning: {
          '500': '#FFC107',
          dark: '#FFA000',
          light: {
            '1': '#FFECB3',
            '2': '#FFF8E1',
          },
        },
        error: {
          '500': '#F44336',
          dark: '#D32F2F',
          light: {
            '1': '#E57373',
            '2': '#EF9A9A',
            '3': '#FFCDD2',
          },
        },
        info: {
          '500': '#2196F3',
          dark: '#1976D2',
          light: {
            '1': '#64B5F6',
            '2': '#90CAF9',
            '3': '#BBDEFB',
          },
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: 0,
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: 0,
          },
        },
        'collapsible-down': {
          from: {
            height: 0,
          },
          to: {
            height: 'var(--radix-collapsible-content-height)',
          },
        },
        'collapsible-up': {
          from: {
            height: 'var(--radix-collapsible-content-height)',
          },
          to: {
            height: 0,
          },
        },
        'fade-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
        'fade-left': 'fade-left 0.2s ease',
      },
    },
  },
  plugins: [
    // animate,
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-animate'),
    // require('tailwindcss-animated'),
    // animations,
  ],
}
