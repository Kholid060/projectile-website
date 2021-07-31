<template>
  <header class="sticky w-full app-nav">
    <nav class="container flex items-center h-16 overflow-hidden">
      <img
        :src="logoSvg"
        :class="[isSticky ? 'w-6' : 'w-8']"
        alt="Projectile Logo"
        title="Projectile Logo"
        class="app-nav__logo"
      />
      <h3
        :class="[isSticky ? 'text-xl' : 'text-2xl']"
        class="ml-4 app-nav__title"
      >
        Projectile
      </h3>
      <div class="flex-grow"></div>
      <transition name="slide-fade" mode="out-in">
        <ui-button
          v-if="isSticky"
          :href="downloadURL"
          target="_blank"
          tag="a"
          variant="primary"
        >
          <v-mdi name="mdi-tray-arrow-down" class="-ml-1 mr-2"></v-mdi>
          <span>Download</span>
        </ui-button>
      </transition>
    </nav>
  </header>
</template>
<script>
import { onMounted, ref } from 'vue';
import { useIntersect } from '@/composable/intersect';
import logoSvg from '@/assets/svg/logo.svg';

export default {
  setup() {
    const downloadURL = import.meta.env.VITE_REPOSITORY_URL + '/releases';
    const intersect = useIntersect({ threshold: [1] });

    const isSticky = ref(false);

    onMounted(() => {
      intersect.observe(
        document.querySelector('.app-nav'),
        ({ intersectionRatio }) => {
          isSticky.value = intersectionRatio < 1;
        }
      );
    });

    return {
      logoSvg,
      isSticky,
      downloadURL,
    };
  },
};
</script>
<style scoped lang="postcss">
.app-nav {
  top: -1px;
  &__logo {
    transition: width 250ms ease;
  }
  &__title {
    transition: font-size 250ms ease;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition-property: transform, opacity;
  transition-duration: 400ms;
  transition-timing-function: ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
