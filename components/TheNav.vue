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
</script>

<template>
    <div
        class="w-full flex items-center justify-center pt-[90px] h-[130px] fixed bottom-0 -translate-y-[50px]"
    >
        <!-- container anchor point -->
        <div class="px-[30px] relative flex items-center justify-center">
            <!-- links copy only to apply shadow at the down layer -->
            <div
                class="nav_shadow absolute z-10 border-2 border-black h-[34px] min-w-[300px] rounded-full bg-white"
            >
                <ul
                    class="flex items-center justify-center gap-2 h-full"
                    aria-hidden="false"
                    tabindex="-1"
                >
                    <li v-for="link in links" :key="link.route" class="">
                        <NavLink
                            :link="link"
                            :currentPath="route.path"
                            tabindex="-1"
                        />
                    </li>
                </ul>
            </div>
            <!-- the nav pic -->
            <TheNavPic />
            <!-- nav bar -->
            <div
                class="border-2 border-black relative z-30 h-[34px] min-w-[300px] rounded-full bg-white"
            >
                <ul class="flex items-center justify-center gap-2 h-full">
                    <li v-for="link in links" :key="link.route" class="">
                        <NavLink :link="link" :currentPath="route.path" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
