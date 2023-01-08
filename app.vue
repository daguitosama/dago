<template>
    <div>
        <!-- layout is not used, just to remove annoying mismatch warnings -->
        <NuxtLayout>
            <!-- todo: uncomment the nav -->
            <TheNav />
            <main>
                <NuxtPage />
            </main>
        </NuxtLayout>
    </div>
</template>

<script setup></script>

<style>
.nav_shadow {
    box-shadow: 0px 4px 32px 14px rgba(0, 0, 0, 0.15);
}
</style>
