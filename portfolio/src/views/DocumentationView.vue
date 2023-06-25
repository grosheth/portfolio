<script setup lang="ts">
import TheDoc from '../components/Documentation.vue'
</script>

<template>
  <div class="Doc">
    <TheDoc />
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
