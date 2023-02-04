<script setup>
const props = defineProps({
    workCard: {
        type: Object,
        default: () => ({
            card_title: "",
            _path: "",
            img: "",
            img_alt: "",
            descriptionItems: ["foo"],
        }),
    },
});
</script>

<template>
    <article
        class="max-[370px]:w-[300px] min-[371px]:w-[340px] min grid gap-[15px]"
    >
        <!-- card pic -->
        <div
            class="relative w-full max-[370px]:h-[300px] min-[371px]:h-[340px] rounded-xl overflow-hidden"
        >
            <NuxtLink :to="workCard._path">
                <img
                    :src="workCard.img"
                    :alt="workCard.img_alt"
                    loading="lazy"
                    class="w-full h-full absolute inset-0 object-cover hover:scale-125 transition-all duration-300 rounded-xl"
                />
            </NuxtLink>
        </div>

        <!-- card info -->
        <div>
            <!-- card info header -->
            <div class="flex items-baseline justify-between">
                <div>
                    <h3 class="font-medium text-2xl leading-none">
                        <NuxtLink :to="workCard._path">
                            {{ workCard.card_title }}
                        </NuxtLink>
                    </h3>
                </div>
                <div>
                    <NuxtLink
                        :to="workCard._path"
                        class="border-b-2 border-greeny"
                        ><span class="font-medium leading-none"
                            >Learn More</span
                        ></NuxtLink
                    >
                </div>
            </div>
            <!-- card info body -->
            <div class="mt-[10px]">
                <ul>
                    <li
                        v-for="(item, idx) in workCard.descriptionItems"
                        :key="idx"
                    >
                        <span
                            class="font-medium text-type-on-light-dimmed dark:text-type-on-dark-dimmed"
                            >{{ item }}</span
                        >
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>
