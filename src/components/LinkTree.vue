<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import TwitterIcon from "./icons/TwitterIcon.vue";
import YoutubeIcon from "./icons/YoutubeIcon.vue";
import MastodonIcon from "./icons/MastodonIcon.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Games</template>
    <a target="_blank" href="https://stealcase.itch.io/codedungeon">Code Dungeon</a>
    <div></div>
    <!-- <a target="_blank" href="https://stealcase.itch.io/mechs-of-the-north">Mechs of the North</a>
    <div></div> -->
    <a target="_blank" href="https://monstersofthenorth.com/">Monsters of the North</a>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Socials</template>
    <YoutubeIcon></YoutubeIcon>
    <TwitterIcon></TwitterIcon>
    <InstagramIcon></InstagramIcon>
    <MastodonIcon></MastodonIcon>
  </WelcomeItem>
</template>
