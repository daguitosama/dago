<script setup>
const props = defineProps({
    useH2: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <section class="max-w-sm w-full">
        <div class="w-full">
            <MainHeading text="Contact" :useH2="useH2" />
            <div class="mt-[45px] w-full font-medium">
                <ul class="grid gap-3">
                    <!-- email -->
                    <li class="flex justify-between items-center">
                        <span>Email</span>

                        <a
                            href="mailto:tocarralero@gmail.com"
                            class="border-b-2 border-b-greeny"
                        >
                            <span class="text-lg">
                                tocarralero@gmail.com</span
                            ></a
                        >
                    </li>
                    <li class="flex justify-between items-center">
                        <span>Phone</span>
                        <a
                            href="tel:+5352558306"
                            class="border-b-2 border-b-greeny"
                        >
                            <span class="text-lg"> +5352558306</span></a
                        >
                    </li>
                    <li class="flex justify-between items-center">
                        <span>GitHub</span>

                        <a
                            href="https://github.com/daguitosama/"
                            class="border-b-2 border-b-greeny"
                        >
                            <span class="text-lg"> @daguitosama</span></a
                        >
                    </li>
                    <li class="flex justify-between items-center">
                        <span>Twitter</span>

                        <a
                            href="https://twitter.com/daguitosama"
                            class="border-b-2 border-b-greeny"
                        >
                            <span class="text-lg"> @daguitosama</span></a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
