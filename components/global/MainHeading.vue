<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Main Heading",
    },
    useH1: {
        type: Boolean,
        default: true,
    },
    useH2: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <h1
        v-if="useH1 && !useH2"
        class="font-bold text-5xl md:text-6xl lg:text-7xl"
    >
        {{ text }}
    </h1>
    <h2 v-else-if="useH2" class="font-bold text-5xl md:text-6xl lg:text-7xl">
        {{ text }}
    </h2>
</template>
