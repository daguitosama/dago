<script setup>
// on home special case handling
const route = useRoute();
const currentlyInHome = computed(() => route.name == "index");
const { renderNavPicture, on } = useNavPictureRenderSignal();

// show the pic when mounted
onMounted(() => {
    on();
});

// on Home prevent the pic render
//  leave  signalling to the TheHomeIntroPic
const shouldRenderPic = computed(
    () => !currentlyInHome.value && renderNavPicture.value
);
</script>

<template>
    <Transition
        enterFromClass="opacity-0 scale-0 "
        enterActiveClass="transition-all duration-[1s] origin-bottom"
        enterToClass="opacity-100 scale-100 "
        leaveFromClass="opacity-100 scale-100 "
        leaveActiveClass="transition-all duration-[1s] origin-bottom"
        leaveToClass="opacity-0 scale-0 "
    >
        <!-- 
            this component markup is using a specific parent stacking context, 
            use just in the intended outlet in TheNav 
        -->
        <div
            v-if="shouldRenderPic"
            class="nav_shadow border-2 border-black rounded-full h-[96px] w-[96px] flex justify-center items-center absolute z-20 bottom-0 -translate-y-[17px] pb-[13px] bg-white"
        >
            <div class="h-[61.52px] w-[56.8px] relative">
                <img
                    src="/img/Dago.png"
                    alt="Dago smiling"
                    class="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
    </Transition>
</template>
