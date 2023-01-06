<script setup>
const { renderNavPicture, on, off } = useNavPictureRenderSignal();
</script>

<template>
    <div>
        <div>
            <label for="r">Render Pic:</label>
            <input type="checkbox" v-model="renderNavPicture" class="ml-2" />
        </div>
    </div>
</template>
