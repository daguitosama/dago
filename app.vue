<template>
    <div>
        <!-- layout is not used, just to remove annoying mismatch warnings -->
        <NuxtLayout>
            <TheNav />
            <main>
                <NuxtPage />
            </main>
        </NuxtLayout>
    </div>
</template>

<script setup>
const route = useRoute();
</script>
