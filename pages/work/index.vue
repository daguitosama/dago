<script setup>
    const { public: BASE_URL } = useRuntimeConfig();
    useHead({
        title: "Dago AC",
        meta: [
            // description
            {
                hid: "description",
                name: "description",
                content: "Web design & Web development",
            },
            // OG / Facebook
            {
                hid: "og:type",
                property: "og:type",
                content: "website",
            },
            {
                hid: "og:url",
                property: "og:url",
                content: `${BASE_URL}/work`,
            },
            {
                hid: "og:title",
                property: "og:title",
                content: "Dago AC",
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "Web design & Web development",
            },
            {
                hid: "og:image",
                property: "og:image",
                content: `${BASE_URL}/img/global/og.jpg`,
            },
            // Twitter
            {
                hid: "twitter:card",
                property: "twitter:card",
                content: "summary_large_image",
            },
            {
                hid: "twitter:url",
                property: "twitter:url",
                content: `${BASE_URL}/work`,
            },
            {
                hid: "twitter:title",
                property: "twitter:title",
                content: "Dago AC",
            },
            {
                hid: "twitter:description",
                property: "twitter:description",
                content: "Web design & Web development",
            },
            {
                hid: "twitter:image",
                property: "twitter:image",
                content: `${BASE_URL}/img/global/og.jpg`,
            },
        ],
    });
</script>

<template>
    <div
        class="flex flex-col pb-[200px] pt-[120px] mx-auto max-w-screen-xl w-full px-[30px] gap-[150px]"
    >
        <SectionWork />
        <SectionProjects />
    </div>
</template>
