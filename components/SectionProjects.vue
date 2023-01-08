<script setup></script>

<template>
    <div class="mx-auto max-w-screen-xl w-full">
        <MainHeading text="Latest Jobs" :useH2="true" />
        <div class="mt-[50px] flex flex-col items-center">
            <WorkCardList :workCards="workCards" />
        </div>
    </div>
</template>
