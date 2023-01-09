<script setup>
const props = defineProps({
    url: {
        type: String,
        default: "/",
    },
    class: {
        type: String,
        default: "",
    },
});

const frameState = ref("idle");
function triggerLoad() {
    frameState.value = "loading";
}
function onFrameLoad() {
    frameState.value = "loaded";
}
function onFrameError() {
    frameState.value = "error";
}
</script>

<template>
    <div class="w-full">
        <div class="mt-[50px]">
            <p class="">
                <button
                    :disabled="
                        frameState == 'loading' || frameState == 'loaded'
                    "
                    @click="triggerLoad"
                    class="bg-black px-[8px] py-[2px] rounded-full text-white font-medium leading-none text-sm"
                    :class="{ 'animate-pulse': frameState == 'loading' }"
                >
                    <span v-if="frameState == 'idle'">Load</span>
                    <span v-else-if="frameState == 'loading'">Loading</span>
                    <span v-else-if="frameState == 'loaded'">Loaded</span>
                    <span v-else-if="frameState == 'error'"
                        >Something Bad happen</span
                    >
                </button>
                <span class="text-xl font-bold"> Live Preview</span>
            </p>
            <p class="text-type-on-light-dimmed font-medium text-sm max-w-md">
                For security reasons, some interactive elements might be
                disabled, but you can see pretty much anything.
            </p>
        </div>
        <div class="overflow-visible">
            <div
                :class="class"
                class="h-[700px] w-full sm:w-[380px] border-black border-4 shadow_ease rounded-xl overflow-hidden relative"
            >
                <iframe
                    v-if="frameState == 'loading' || frameState == 'loaded'"
                    @load="onFrameLoad"
                    @error="onFrameError"
                    :src="url"
                    frameborder="1"
                    class="w-full h-full border-black shadow_ease rounded-xl"
                ></iframe>

                <div
                    v-if="frameState == 'loading'"
                    class="absolute inset-0 flex items-center justify-center w-full h-full"
                >
                    <div
                        class="w-[50px] h-[50px] rounded-full bg-black animate-ping"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
