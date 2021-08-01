<template>
  <footer class="flex items-center justify-center">
    <ul class="space-x-8 text-gray-300">
      <li class="inline-block">
        <a target="_blank" rel="noreferrer noopener" :href="repositoryURL"
          >Repository</a
        >
      </li>
      <li class="inline-block">
        <a
          target="_blank"
          rel="noreferrer noopener"
          :href="repositoryURL + '/issues'"
          >Report an issue</a
        >
      </li>
    </ul>
  </footer>
</template>
<script setup>
const repositoryURL = import.meta.env.VITE_REPOSITORY_URL;
</script>
