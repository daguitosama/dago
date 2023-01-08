// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL,
        },
    },

    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },
    modules: [
        "@nuxtjs/i18n",
        // "@nuxtjs/color-mode",
        "@nuxtjs/tailwindcss",
        "@nuxt/content",
    ],
    // content:{
    //     locales:[]
    // },
    i18n: {
        locales: [
            {
                code: "en",
                iso: "en-US",
                // file: "en-US.json",
                name: "English",
            },
            // {
            //     code: "es",
            //     iso: "es-ES",
            //     // file: "es-ES.json",
            //     name: "Español",
            // },
        ],
        vueI18n: {
            fallbackLocale: "en",
        },
        defaultLocale: "en",
        detectBrowserLanguage: false,
        // seo: false,
        // lazy: true,
        // langDir: "i18n/",
        baseUrl: process.env.BASE_URL,
    },

    // colorMode: {
    //     classSuffix: "",
    // },
});
