<script setup lang="ts">
import InfoCard from '@/components/InfoCard.vue'
import { getPageData } from '@/pageMethods'
import { emptyHomePageData, type HomePageData } from '@/types'
import { ref } from 'vue'

const pageData = ref<HomePageData>(emptyHomePageData)

getPageData('home', pageData)
</script>

<template>
    <main>
        <div class="title-card">
            <div class="card-row">
                <div class="title-info">
                    <h1 id="title" class="title"></h1>
                    <h3 id="subtitle" class="subtitle"></h3>
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
            <InfoCard id="card1" title="" description="" />
            <InfoCard id="card2" title="" description="" />
            <InfoCard id="card3" title="" description="" />
            <InfoCard id="card4" title="" description="" />
        </div>
    </main>
</template>
