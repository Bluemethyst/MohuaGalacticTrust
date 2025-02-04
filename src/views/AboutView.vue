<script setup lang="ts"></script>

<template>
    <main>
        <div class="about-container">
            <h1 class="title">About Mohua Galactic Trust</h1>
            <p class="description">
                Mohua Galactic Trust is a small non-profit organization dedicated to exploring the
                galaxy from the comfort of our homes. Our mission is to bring the wonders of the
                universe closer to everyone, regardless of their location or resources.
            </p>
            <p class="description">
                We host a variety of events and meetups to share our love of the galaxy with others.
                Our team is passionate about astronomy and we aim to inspire the same passion in our
                community.
            </p>
            <p class="description">
                Your support helps us fund our equipment and events. Every donation, no matter how
                small, makes a big difference. Thank you for being a part of our journey!
            </p>
        </div>
    </main>
</template>

<style scoped>
@import '@/assets/main.css';

.about-container {
    margin: 50px auto;
    padding: 20px;
    max-width: 800px;
    background-color: var(--card);
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
    font-weight: var(--font-title-weight);
    letter-spacing: 1px;
    font-size: 36px;
    background: -webkit-linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin-bottom: 20px;
}

.description {
    font-weight: var(--font-text-weight);
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: white;
}
</style>
