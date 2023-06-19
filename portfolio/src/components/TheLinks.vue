<script setup lang="ts">
import LinksItem from './WelcomeItem.vue'
</script>


<template>
    <LinksItem>

        <template #icon>
            <a href="https://discord.com/channels/769577020299935795/769577020920561667">
              <img alt="Discord Logo" class="logo" src="@/assets/discord-logo.png" width="150" height="110" />
            </a>
        </template>

        <template #heading>Discord</template>


    </LinksItem>

    <LinksItem>

        <template #icon>
            <a href="https://open.spotify.com/">
                <img alt="Spotify Logo" class="logo" src="@/assets/spotifylogo.png" width="160" height="100" />
            </a>
        </template>

        <template #heading>Spotify</template>

    </LinksItem>

    <LinksItem>

        <template #icon>
            <a href="">
                <img alt="Reddit Logo" class="logo" src="@/assets/reddit-logo.png" width="150" height="120" />
            </a>
        </template>

        <template #heading>Reddit</template>

    </LinksItem>

    <LinksItem>

        <template #icon>
            <a href="">
                <img alt="Reddit Logo" class="logo" src="@/assets/github-mark-white.png" width="100" height="100" />
            </a>
        </template>

        <template #heading>Github</template>

    </LinksItem>
    
</template>
