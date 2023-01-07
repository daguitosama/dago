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
        class="flex items-center rounded-full px-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black transition-all duration-300 max-w-[100px] relative"
        :class="{ 'max-w-[200px]': isCurrentRoute }"
    >
        <Transition
            enterFromClass="opacity-0 scale-0 "
            enterActiveClass="transition-all duration-300 origin-center"
            enterToClass="opacity-100 scale-100 "
            leaveFromClass="opacity-100 scale-100 "
            leaveActiveClass="transition-all duration-300 origin-center"
            leaveToClass="opacity-0 scale-0 "
        >
            <span
                v-if="isCurrentRoute"
                aria-hidden="true"
                class="leading-none absolute top-0 left-0"
                >•</span
            >
        </Transition>
        <span
            class="font-medium leading-none transition-all duration-300"
            :class="{ 'pl-2': isCurrentRoute }"
            >{{ link.label }}</span
        >
    </NuxtLink>
</template>
