<script setup lang="ts">
import LinksItem from './LinksItem.vue'
</script>


<template>
    <LinksItem>
        <template #icon>
            <a href="https://discord.com/channels/769577020299935795/769577020920561667" target="_blank" rel="noopener">
                <img alt="Discord Logo" class="logo" src="@/assets/logos/discord-logo.png" width="50" height="50" />
            </a>
        </template>
        <template #heading>Discord</template>
        <template #paragraph>Hang with the boiis</template>
        <br>

    </LinksItem>

    <LinksItem>

        <template #icon>
            <a href="https://open.spotify.com/" target="_blank" rel="noopener">
                <img alt="Spotify Logo" class="logo" src="@/assets/logos/spotifylogo.png" width="55" height="30" />
            </a>
        </template>
        <template #heading>Spotify</template>
        <template #paragraph>for music needs</template>
        <br>

    </LinksItem>

    <LinksItem>

        <template #icon>
            <a href="https://www.reddit.com/" target="_blank" rel="noopener">
                <img alt="Reddit Logo" class="logo" src="@/assets/logos/reddit-logo.png" width="50" height="50" />
            </a>
        </template>
        <template #heading>Reddit</template>
        <template #paragraph>Memes and lolz</template>
    
        <br>

    </LinksItem>

    <LinksItem>

        <template #icon>
            <a href="https://github.com/grosheth" target="_blank" rel="noopener">
                <img alt="Reddit Logo" class="logo" src="@/assets/logos/github-mark-white.png" width="30" height="30" />
            </a>
        </template>
        <template #heading>Github</template>
        <template #paragraph>Main SCM</template>

        <br>

    </LinksItem>
    
</template>
