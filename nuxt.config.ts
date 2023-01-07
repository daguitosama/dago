// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
    modules: ["@nuxtjs/i18n", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],
    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },
    i18n: {
        // loca
    },

    colorMode: {
        classSuffix: "",
    },
});
