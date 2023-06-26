<script setup lang="ts">
import ProjectItem from './ProjectsItem.vue'
defineProps<{
  msg: string
}>()
</script>

<template>
    <ProjectItem>
        <template #heading> Card For One Project</template>
    </ProjectItem>
</template>
