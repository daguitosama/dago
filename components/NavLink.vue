<script setup>
const props = defineProps({
    link: {
        type: Object,
        default: () => ({
            path: "/",
            label: "Home",
        }),
    },
    currentPath: {
        type: String,
    },
});

const isCurrentRoute = computed(() =>
    props.currentPath == "/"
        ? // handle home case `/`
          props.link.path == "/"
        : // handle other cases `/`
          props.link.path != "/" &&
          props.currentPath.startsWith(props.link.path)
);
</script>

<template>
    <NuxtLink
        :to="link.path"
        class="flex items-center rounded-full px-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
    >
        <span v-if="isCurrentRoute" aria-hidden="true" class="mr-2 leading-none"
            >•</span
        >
        <span class="font-medium leading-none">{{ link.label }}</span>
    </NuxtLink>
</template>
