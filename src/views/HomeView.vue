<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
    <main>
        <NavBar />
        <div class="main">
            <div class="card-row">
                <div class="title-info">
                    <h1 class="title">Mohua Galactic Trust</h1>
                    <h3 class="subtitle">Explore The Galaxy Through Your Own Eyes</h3>
                    <div class="buttons-horizontal">
                        <RouterLink to="/explore" class="button">Explore</RouterLink>
                        <RouterLink to="/about" class="button">About</RouterLink>
                        <RouterLink to="/calendar" class="button">Calendar</RouterLink>
                        <RouterLink to="/donate" class="button">Donate</RouterLink>
                    </div>
                </div>
            </div>
            <div class="telescope-div card-row">
                <div class="gradient-wrapper">
                    <div class="gradient-circle"></div>
                    <img class="icon" src="@/assets/telescope.svg" />
                </div>
            </div>
        </div>
    </main>
</template>
