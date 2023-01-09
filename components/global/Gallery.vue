<script setup>
const props = defineProps({
    images: {
        type: Array,
        default: () => [{ src: "", alt: "" }],
    },
});
</script>

<template>
    <section class="grid gap-[30px]">
        <div>
            <LittleHeading text="Gallery" />
        </div>
        <div class="h-[670px] w-full relative overflow-x-scroll">
            <ul
                class="absolute h-[667px] left-0 top-0 w-[100vw] flex gap-[5px] sm:gap-[30px]"
            >
                <li
                    class="w-[308px] h-[667px] shrink-0"
                    v-for="(img, idx) in images"
                    :key="idx"
                >
                    <img
                        :src="img.src"
                        :alt="img.alt"
                        class="w-full h-full rounded-xl border-black border-2"
                    />
                </li>
            </ul>
        </div>
    </section>
</template>
