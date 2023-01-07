<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Main Heading",
    },
});
</script>

<template>
    <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl">{{ text }}</h1>
</template>
