<template>
  <app-nav class="mb-6 bg-gray-900 mt-8 md:mt-12 lg:mt-20"></app-nav>
  <section class="container">
    <h1 class="text-4xl mb-12 font-semibold">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia alias
      dolore dolor, pariatur animi est minima officiis neque in! Eos dolore
      nulla, voluptas quidem mollitia assumenda! Voluptatum nisi recusandae
      ipsam.
    </h1>
    <button>Download</button>
    <img
      :src="image1"
      class="rounded-md border border-gray-800 shadow-2xl mx-auto"
    />
  </section>
</template>
<script>
import AppNav from './components/app/AppNav.vue';
import image1 from './assets/images/image1.png';

export default {
  components: { AppNav },
  setup() {
    return {
      image1,
    };
  },
};
</script>
