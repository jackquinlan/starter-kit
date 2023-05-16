/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    experimental: { appDir: true },
};

export default config;

