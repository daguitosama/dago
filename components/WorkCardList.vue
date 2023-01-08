<script setup>
const props = defineProps({
    // workCards are fetched this inside the component
    // so not needed now
    // but left commented here if needed in the future
    // workCards: {
    //     type: Array,
    //     default: () => [
    //         {
    //             card_title: "aa meals",
    //             slug: "/work/aa-meals",
    //             img: "/img/work/work-card-pic-aameals.jpg",
    //             img_alt: "",
    //             descriptionItems: [
    //                 "Design & Development",
    //                 "Rest Api with Sign Up processing",
    //             ],
    //         },
    //     ],
    // },
});

const { data: workCards } = await useAsyncData("work-cards", () =>
    queryContent("/work").find()
);
</script>

<template>
    <section>
        <ul class="grid gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            <li v-for="(card, idx) in workCards" :key="idx">
                <WorkCard :workCard="card" />
                <!-- <pre><code>{{ card }}</code></pre> -->
            </li>
        </ul>
    </section>
</template>
