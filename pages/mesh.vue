<script setup>
const workCardData = {
    title: "pozos en el desierto",
    path: "/work/aa-meals",
    img: "/img/work/work-card-pic-pozos.jpg",
    img_alt: "",
    descriptionItems: ["Development", "Self-hosted Media Cloud and Analytics"],
};

const aaMealsCard = {
    title: "aa meals",
    path: "/work/aa-meals",
    img: "/img/work/work-card-pic-aameals.jpg",
    img_alt: "",
    descriptionItems: [
        "Design & Development",
        "Rest Api with Sign Up processing",
    ],
};

const { data: workCards } = await useAsyncData("work-cards", () =>
    queryContent("/work").find()
);
// console.log({ workCards });
</script>

<template>
    <div class="pb-[200px]">
        <div class="px-[30px] pt-2">
            <h1>Mesh</h1>
        </div>
        <div
            class="mt-[50px] mx-auto max-w-screen-xl w-full px-[30px] flex flex-col items-center"
        >
            <WorkCardList :workCards="workCards" />
        </div>
    </div>
</template>
