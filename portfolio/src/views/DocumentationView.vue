<script setup lang="ts">
import TheDoc from '../components/TheDocumentation.vue'
</script>

<template>
  <div class="Doc">
    <TheLinks />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
