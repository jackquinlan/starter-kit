import type { Config } from 'tailwindcss';

// import font family for font fallback
import { fontFamily }  from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container: {
                padding: '2rem',
                screens: {
                    '2xl': '1400px',
                },
                center: true,
            },
            fontFamily: {
                sans: ['var(--font-inter)', ...fontFamily.sans],
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: `calc(var(--radius) - 4px)`,
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
