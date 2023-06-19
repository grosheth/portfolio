<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    This page contains my personal documentation and documentation for
    <a href="https://github.com/grosheth" target="_blank" rel="noopener">Github</a>
    projects
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Projects</template>

    This page is a quick resume ans status of my projects
    It contains links to the specific repos, the current advancement of those projects
    in the form of progress bars and other pertinent informations

  </WelcomeItem>

  <WelcomeItem>

    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>My bookmarks</template>

    This section quickly gives me links to my favorite websites like
    <a href="https://open.spotify.com/" target="_blank" rel="noopener">Spotify</a> or
    <a href="https://discord.com/channels/769577020299935795/769577020920561667" target="_blank" rel="noopener">Discord</a>

  </WelcomeItem>

</template>
