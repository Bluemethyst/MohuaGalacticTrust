<script setup lang="ts">
import InfoCard from '@/components/InfoCard.vue'
</script>

<script lang="ts"></script>

<template>
    <main>
        <div class="title-card">
            <div class="card-row">
                <div class="title-info">
                    <h1 class="title">Mohua Galactic Trust</h1>
                    <h3 class="subtitle">Explore The Galaxy Through Your Own Eyes</h3>
                    <div class="buttons-horizontal">
                        <RouterLink to="/explore" class="button main-button">Explore</RouterLink>
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

        <div class="info-cards">
            <InfoCard
                title="About Us"
                description="A small non-profit organization dedicated to exploring the galaxy from the comfort of our homes."
            />
            <InfoCard
                title="Events"
                description="We host a variety of events and meet ups to share our love of the galaxy with others. Check out our calendar for more information."
            />
            <InfoCard
                title="Donate"
                description="Donate to us to help fund our equipment and events. Every little bit helps!"
            />
            <InfoCard
                title="Contact Us"
                description="Get in touch with us to learn more about our mission and how you can help."
            />
        </div>
    </main>
</template>
