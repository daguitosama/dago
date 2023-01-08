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

const loadFrame = ref(false);
const frameHasLoaded = ref(false);
const frameLoadError = ref(false);
function triggerLoad() {
    loadFrame.value = true;
}
</script>

<template>
    <div class="w-full">
        <div class="mt-[50px]">
            <p class="">
                <button
                    :disabled="frameHasLoaded"
                    @click="triggerLoad"
                    class="bg-black px-[8px] py-[2px] rounded-full text-white font-medium leading-none text-sm"
                    :class="{ 'animate-pulse': loadFrame && !frameHasLoaded }"
                >
                    <span v-if="!loadFrame">Load</span>
                    <span v-else-if="!frameHasLoaded">Loading</span>
                    <span v-else-if="frameHasLoaded && !frameLoadError"
                        >Loaded</span
                    >
                    <span v-else>Something Bad happen</span>
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
                class="h-[700px] w-full sm:w-[380px] border-black border-4 shadow_ease rounded-xl overflow-hidden"
            >
                <iframe
                    v-if="loadFrame"
                    @load="frameHasLoaded = true"
                    @error="frameLoadError = true"
                    :src="url"
                    frameborder="1"
                    class="w-full h-full border-black shadow_ease rounded-xl"
                ></iframe>
            </div>
        </div>
    </div>
</template>
