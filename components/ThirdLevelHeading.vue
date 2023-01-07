<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Main Heading",
    },
    link: {
        type: Object,
        default: {
            href: "",
            label: "",
        },
    },
});
</script>

<template>
    <h3 v-if="!link" class="font-bold text-3xl md:text-4xl lg:text-5xl">
        {{ text }}
    </h3>
    <h3 v-else>
        <a
            :href="link.href"
            class="font-bold text-2xl md:text-3xl lg:text-4xl border-b-4 border-greeny"
            >{{ link.label }}</a
        >
    </h3>
</template>
