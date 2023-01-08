const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["/content/**/*.md"],
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
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};
