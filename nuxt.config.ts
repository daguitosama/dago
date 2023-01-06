// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/fonts.css"],
    modules: ["@nuxtjs/i18n", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],

    i18n: {
        // loca
    },

    colorMode: {
        classSuffix: "",
    },
});
