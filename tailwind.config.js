const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Satoshi Variable", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                greeny: "#21C93C",
                type: {
                    on: {
                        light: {
                            dimmed: "#717171",
                        },
                    },
                },
            },
        },
    },
    plugins: [],
};
