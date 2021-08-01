<template>
  <home-main-section class="mb-36"></home-main-section>
  <home-features-section class="mb-24"></home-features-section>
  <div class="text-center mb-36">
    <ui-button
      tag="a"
      :href="repository + '/releases'"
      target="_blank"
      rel="noreferrer noopener"
      size="large"
      variant="primary"
      class="inline-block"
    >
      <v-mdi name="mdi-tray-arrow-down" class="-ml-1 mr-2"></v-mdi>
      <span>Download</span>
    </ui-button>
  </div>
  <home-footer class="mb-12"></home-footer>
</template>
<script setup>
import HomeFeaturesSection from './components/home/HomeFeaturesSection.vue';
import HomeMainSection from './components/home/HomeMainSection.vue';
import HomeFooter from './components/home/HomeFooter.vue';
const repository = import.meta.env.VITE_REPOSITORY_URL;
</script>
