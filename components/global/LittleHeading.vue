<script setup>
const props = defineProps({
    text: {
        type: String,
        default: "Little heading",
    },
});
</script>

<template>
    <h2 class="leading none text-xl font-bold">
        {{ text }}
    </h2>
</template>
