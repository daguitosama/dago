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
                content: `${BASE_URL}/about`,
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
                content: `${BASE_URL}/about`,
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
    <section
        class="mx-auto max-w-lg pt-[120px] w-full flex flex-col items-center"
    >
        <div class="w-[319px] h-[331px] relative">
            <img
                src="/img/collage.jpg"
                alt="A collection of activities"
                width="319px"
                height="331px"
                class="absolute inset-0 w-full h-full object-cover"
            />
        </div>
        <MainHeading
            text="About Me"
            class="mt-[45px] text-center"
        />
        <div class="mt-[45px] w-full font-medium max-w-xs">
            <div class="text-center text-xl">
                <p>
                    I live in Havana Cuba, im currently studying informatics at
                    the university.
                </p>
                <p>
                    I like dogs, coffee, bushcraft YouTube videos, outdoor
                    activities, and meting people from different cultures.
                </p>
            </div>
        </div>
        <div class="h-[300px]"></div>
    </section>
</template>
