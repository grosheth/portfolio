<script setup lang="ts">
import DocItems from './DocumentationItem.vue'
</script>

<template>

    <DocItems docs="linux.md">
        <template #heading> Documentation</template>
        
    </DocItems>

</template>