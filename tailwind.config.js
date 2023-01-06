const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Satoshi Variable", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
