<script setup></script>

<template>
    <div class="mx-auto max-w-screen-xl w-full">
        <MainHeading text="Latest Jobs" :useH2="true" class="text-center" />
        <div class="mt-[50px] flex flex-col items-center">
            <!-- sm:items-start -->
            <WorkCardList />
        </div>
    </div>
</template>
