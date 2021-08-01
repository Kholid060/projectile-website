<template>
  <section class="container mt-8 md:mt-12 lg:mt-20">
    <div class="flex items-center mb-12 md:mb-20">
      <img
        :src="logoSvg"
        alt="Projectile Logo"
        title="Projectile Logo"
        class="mr-4"
        width="24"
        height="60"
      />
      <h3 class="text-xl">Projectile</h3>
    </div>
    <h1
      class="text-4xl md:text-5xl mb-12 font-semibold md:leading-normal w-10/12"
    >
      An app that will help you to manage your JavaScript projects.
    </h1>
    <div class="space-x-2 md:space-x-4 lg:space-x-6 flex">
      <ui-button
        tag="a"
        :href="repository + '/releases'"
        rel="noreferrer noopener"
        target="_blank"
        variant="primary"
        size="large"
        class="inline-block"
      >
        <v-mdi name="mdi-tray-arrow-down" class="-ml-1 mr-2" />
        <span>Download</span>
      </ui-button>
      <ui-button
        tag="a"
        :href="repository"
        rel="noreferrer noopener"
        target="_blank"
        class="inline-block"
        size="large"
      >
        <v-mdi name="mdi-github" class="-ml-1 mr-2" />
        <span>GitHub</span>
      </ui-button>
    </div>
    <img
      :src="packageScreenshot"
      alt="packages screenshot"
      width="600"
      height="400"
      class="rounded-lg mt-32 ring-8 ring-gray-800 shadow-2xl mx-auto w-full"
    />
  </section>
</template>
<script setup>
import packageScreenshot from '@/assets/images/packages-screenshot.png';
import logoSvg from '@/assets/svg/logo.svg';

const repository = import.meta.env.VITE_REPOSITORY_URL;
</script>
