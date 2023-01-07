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
</script>

<template>
    <div
        class="w-full flex items-center justify-center pt-[90px] h-[130px] fixed bottom-0 -translate-y-[50px] z-30"
    >
        <!-- container anchor point -->
        <div class="px-[30px] relative flex items-center justify-center">
            <!-- nav bar skeleton just for shadows at the bottom layer -->
            <div
                ref="nav_bar_skeleton"
                class="nav_shadow absolute z-10 h-[34px] min-w-[300px] rounded-full"
            ></div>
            <!-- the nav pic -->
            <TheNavPic />
            <!-- nav bar -->
            <nav
                ref="nav_bar"
                class="border-2 border-black relative z-30 h-[34px] min-w-[300px] rounded-full bg-white"
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
