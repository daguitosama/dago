<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Main Heading",
    },
});
</script>

<template>
    <h2 class="font-bold text-3xl md:text-4xl lg:text-5xl">{{ text }}</h2>
</template>
