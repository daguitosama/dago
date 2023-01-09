<script setup>
// useHead({
//     // title: t("metadata.home.title"),
//     meta: [
//         // description
//         // {
//         //     hid: "description",
//         //     name: "description",
//         //     content: t("metadata.home.description"),
//         // },
//         // OG / Facebook
//         // {
//         //     hid: "og:type",
//         //     property: "og:type",
//         //     content: "website",
//         // },
//         // {
//         //     hid: "og:url",
//         //     property: "og:url",
//         //     content: canonical.value,
//         // },
//         // {
//         //     hid: "og:title",
//         //     property: "og:title",
//         //     content: t("metadata.home.title"),
//         // },
//         // {
//         //     hid: "og:description",
//         //     property: "og:description",
//         //     content: t("metadata.home.description"),
//         // },
//         // {
//         //     hid: "og:image",
//         //     property: "og:image",
//         //     content: `${BASE_URL}/img/global/social-2.jpg`,
//         // },
//         // Twitter
//         // {
//         //     hid: "twitter:card",
//         //     property: "twitter:card",
//         //     content: "summary_large_image",
//         // },
//         // {
//         //     hid: "twitter:url",
//         //     property: "twitter:url",
//         //     content: canonical.value,
//         // },
//         // {
//         //     hid: "twitter:title",
//         //     property: "twitter:title",
//         //     content: t("metadata.home.title"),
//         // },
//         // {
//         //     hid: "twitter:description",
//         //     property: "twitter:description",
//         //     content: t("metadata.home.description"),
//         // },
//         // {
//         //     hid: "twitter:image",
//         //     property: "twitter:image",
//         //     content: `${BASE_URL}/img/global/social-2.jpg`,
//         // },
//     ],
// });
</script>

<template>
    <div
        class="flex flex-col justify-center pb-[200px] mx-auto max-w-screen-xl w-full px-[30px] gap-[150px]"
    >
        <TheHomeIntro />
        <SectionProjects />
        <div class="flex justify-center">
            <SectionContact :useH2="true" class="max-w-md" />
        </div>
    </div>
</template>
