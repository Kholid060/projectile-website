<template>
  <section class="container">
    <h2 class="text-2xl font-semibold mb-8">Features</h2>
    <div class="grid grid-cols-3 center gap-4">
      <div
        v-for="feature in features"
        :key="feature.name"
        class="transition border p-4 rounded-lg"
      >
        <span class="p-2 rounded-lg inline-block">
          <v-mdi :name="feature.icon" size="34" class="text-gray-100"></v-mdi>
          <p class="text-lg mt-2">{{ feature.name }}</p>
          <p class="text-gray-300">{{ feature.desctription }}</p>
        </span>
      </div>
    </div>
  </section>
</template>
<script setup>
const repository = import.meta.env.VITE_REPOSITORY_URL;
const features = [
  {
    name: 'Packages',
    icon: 'mdi-package-variant-closed',
    desctription: 'Install, update, or delete your packages',
  },
  {
    name: 'Project Manager',
    icon: 'mdi-home-variant-outline',
    desctription: 'Manage all your JS projects',
  },
  {
    name: 'Kanban Boards',
    icon: 'mdi-view-dashboard-outline',
    desctription: 'A kanban board to organize your project',
  },
  {
    name: 'Terminal',
    icon: 'mdi-console-line',
    desctription: 'Integrated with a terminal',
  },
  {
    name: 'Scripts',
    icon: 'mdi-script-text-outline',
    desctription: 'Manage and run your project scripts',
  },
  {
    name: 'Monorepo Support',
    icon: 'mdiSourceRepositoryMultiple',
    desctription: 'Manage your workspaces',
  },
];
</script>
