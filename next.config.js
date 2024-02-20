/** @type {import("next").NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    webpack: (config) => {
        config.externals = [...config.externals, "canvas", "jsdom"];
        return config;
    },
};