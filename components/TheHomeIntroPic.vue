<script setup>
import { useElementVisibility } from "@vueuse/core";

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
});
</script>

<template>
    <div class="flex items-center justify-center" ref="pic_container">
        <div class="w-[204.57px] h-[221.59px] relative">
            <img
                src="/img/Dago.png"
                alt="Dago smiling"
                class="absolute inset-0 w-full h-full object-cover"
            />
        </div>
    </div>
</template>
