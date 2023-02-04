<script setup></script>

<template>
    <main
        class="work-content pt-[100px] pb-[200px] mx-auto max-w-screen-lg w-full flex flex-col items-center overflow-hidden"
    >
        <ContentDoc class="frame" />
    </main>
</template>

<style lang="postcss">
    main.work-content {
        /* paragraphs */
        p {
            @apply mt-[30px] font-medium text-xl max-w-xl mx-auto;
        }

        /* anchors */
        a {
            border-bottom: 2px solid #21c93c;
        }

        ul:not(.gallery-list) {
            @apply max-w-xl mx-auto mt-[30px] pl-[30px] font-medium text-lg list-disc grid gap-[10px];
        }

        .frame {
            @apply px-[30px] max-w-xl mx-auto;
        }
        .m-70 {
            margin-top: 70px;
        }
    }
</style>
