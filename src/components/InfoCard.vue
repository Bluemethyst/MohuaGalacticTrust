<template>
    <div :id="id" class="info-card">
        <h2 :id="`${id}-title`">{{ title }}</h2>
        <p :id="`${id}-description`">{{ description }}</p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'InfoCard',
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>
@import '@/assets/main.css';
.info-card {
    background-color: var(--card);
    border-radius: 8px;
    padding: 24px;
    border-radius: 20px;
    margin: 16px;
    width: 300px;
    height: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
