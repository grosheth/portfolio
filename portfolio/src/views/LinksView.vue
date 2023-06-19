<script setup lang="ts">
import TheLinks from '../components/TheLinks.vue'
</script>

<template>
  <div class="Links">
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
