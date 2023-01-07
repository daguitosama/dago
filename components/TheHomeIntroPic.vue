<script setup>
import { useElementVisibility } from "@vueuse/core";
const shouldRenderPic = ref(false);
// hide
const pic_container = ref();
const picIsVisible = useElementVisibility(pic_container);
const { on, off } = useNavPictureRenderSignal();
// show nav pic when the intro pic is not visible and viceversa
watch(picIsVisible, (newVisibilityValue, oldVisibilityValue) => {
    if (newVisibilityValue) {
        off();
    } else {
        on();
    }
});
// return the state of renderNavPic to true
// when exiting other components would assume
// that state as natural
onBeforeUnmount(() => {
    on();
    shouldRenderPic.value = false;
});

onMounted(() => {
    shouldRenderPic.value = true;
});
</script>

<template>
    <div class="flex items-center justify-center" ref="pic_container">
        <div class="w-[204.57px] h-[221.59px] relative">
            <Transition
                enterFromClass="opacity-0 scale-0 "
                enterActiveClass="transition-all duration-[1s] origin-bottom"
                enterToClass="opacity-100 scale-100 "
                leaveFromClass="opacity-100 scale-100 "
                leaveActiveClass="transition-all duration-[1s] origin-bottom"
                leaveToClass="opacity-0 scale-0 "
            >
                <img
                    v-if="shouldRenderPic"
                    src="/img/Dago.png"
                    alt="Dago smiling"
                    class="absolute inset-0 w-full h-full object-cover"
                />
            </Transition>
        </div>
    </div>
</template>
