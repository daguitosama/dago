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
            <div class="flex items-center gap-2">
                <button
                    :disabled="
                        frameState == 'loading' || frameState == 'loaded'
                    "
                    @click="triggerLoad"
                    class="px-[8px] py-[2px] rounded-full bg-black dark:bg-white text-white dark:text-black font-medium leading-none text-sm"
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
            </div>
            <div
                class="mt-[10px] text-type-on-light-dimmed dark:text-type-on-dark-dimmed font-medium text-sm max-w-md"
            >
                <span
                    >For security reasons, some interactive elements might be
                    disabled, but you can see pretty much anything.</span
                >
            </div>
        </div>
        <div class="overflow-visible">
            <div
                :class="class"
                class="h-[700px] w-full sm:w-[380px] border-black dark:border-white bg-white border-4 shadow_ease rounded-xl overflow-hidden relative"
            >
                <iframe
                    v-if="frameState == 'loading' || frameState == 'loaded'"
                    @load="onFrameLoad"
                    @error="onFrameError"
                    :src="url"
                    frameborder="1"
                    class="w-full h-full border-black dark:border-white bg-white shadow_ease rounded-xl"
                ></iframe>

                <!-- loader -->
                <div
                    v-if="frameState == 'loading'"
                    class="absolute inset-0 flex items-center justify-center w-full h-full bg-white dark:bg-black"
                >
                    <div
                        class="w-[50px] h-[50px] rounded-full bg-black dark:bg-white animate-pulse"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
