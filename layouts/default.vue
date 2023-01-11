<script setup>
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: "id",
    addSeoAttributes: true,
});
// // canonical
// const canonical = computed(
//     () => head.value?.link.filter((link) => link.rel == "canonical")[0].href
// );
// const {
//     public: { BASE_URL },
// } = useRuntimeConfig();
</script>

<template>
    <div>
        <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
            <Head>
                <!-- <Title>{{ title }}</Title> -->
                <template v-for="link in head.link" :key="link.id">
                    <Link
                        :id="link.id"
                        :rel="link.rel"
                        :href="link.href"
                        :hreflang="link.hreflang"
                    />
                </template>
                <template v-for="meta in head.meta" :key="meta.id">
                    <Meta
                        :id="meta.id"
                        :property="meta.property"
                        :content="meta.content"
                    />
                </template>
            </Head>
            <Body
                class="antialiased text-black dark:text-white bg-white dark:bg-black transition-all duration-300"
            >
                <slot />
            </Body>
        </Html>
    </div>
</template>
