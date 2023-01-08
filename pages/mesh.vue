<script setup>
const workCardData = {
    title: "pozos en el desierto",
    slug: "/work/aa-meals",
    img: "/img/work/work-card-pic-pozos.jpg",
    img_alt: "",
    descriptionItems: ["Development", "Self-hosted Media Cloud and Analytics"],
};

const aaMealsCard = {
    title: "aa meals",
    slug: "/work/aa-meals",
    img: "/img/work/work-card-pic-aameals.jpg",
    img_alt: "",
    descriptionItems: [
        "Design & Development",
        "Rest Api with Sign Up processing",
    ],
};
</script>

<template>
    <div
        class="flex flex-col justify-center py-[200px] mx-auto max-w-screen-lg w-full px-[30px]"
    >
        <WorkCard :workCard="workCardData" />
    </div>
</template>
