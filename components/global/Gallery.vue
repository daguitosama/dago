<script setup>
    const props = defineProps({
        images: {
            type: Array,
            default: () => [{ src: "", alt: "" }],
        },
    });
</script>

<template>
    <section class="grid gap-[10px] w-[140%] -translate-x-[30px] px-[30px]">
        <div>
            <LittleHeading
                text="Gallery"
                class=""
            />
        </div>
        <div class="h-[670px] w-full relative overflow-x-scroll">
            <ul
                class="gallery-list absolute h-[667px] left-0 top-0 w-[100vw] flex justify-items-start"
            >
                <li
                    class="w-[308px] h-[667px] shrink-0 scale-90 origin-left"
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
