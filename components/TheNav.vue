<script setup>
const links = [
    {
        path: "/",
        label: "Home",
    },
    {
        path: "/work",
        label: "Work",
    },
    {
        path: "/about",
        label: "About",
    },
    {
        path: "/contact",
        label: "Contact",
    },
];
const route = useRoute();

// adjust nav_bar_skeleton width to match actual nav_bar
const nav_bar = ref();
const nav_bar_skeleton = ref();
onMounted(() => {
    nav_bar_skeleton.value.width = nav_bar.value.getBoundingClientRect().width;
});

const navNormal = ref(true);
function handleHeadClick() {
    navNormal.value = !navNormal.value;
}
</script>

<template>
    <!-- pt-[90px] h-[130px] -->
    <div
        class="w-full flex items-center justify-center fixed bottom-8 -translate-y-[50px] z-30 h-0"
    >
        <!-- container anchor point -->
        <div class="relative flex items-center justify-center">
            <!-- nav bar skeleton just for shadows at the bottom layer -->
            <div
                ref="nav_bar_skeleton"
                class="nav_shadow absolute z-10 h-[34px] min-w-[300px] rounded-full"
                :class="{ 'opacity-0': !navNormal }"
            ></div>
            <!-- the nav pic -->
            <TheNavPic
                @click="handleHeadClick"
                :class="{ 'scale-50': !navNormal }"
            />
            <!-- nav bar -->
            <nav
                ref="nav_bar"
                class="border-2 border-black relative z-30 h-[34px] min-w-[300px] rounded-full bg-white transition-all duration-300"
                :class="{ 'opacity-0': !navNormal }"
            >
                <ul class="flex items-center justify-center gap-2 h-full">
                    <li v-for="link in links" :key="link.route" class="">
                        <NavLink :link="link" :currentPath="route.path" />
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
