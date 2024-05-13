<script setup lang="ts">
import AppFooter from './components/content/app-footer.vue';
import './public/style.css';

useHead({
  title: 'Lego Deconstructions',
  link: [{ rel: 'icon', type: 'image/png', href: '/parts-100.png' }],
});

const { data: setsListData } = await useAsyncData('setsList', () => {
  return queryContent('/set').find(); // TODO get with one query
});
const heroSet = setsListData.value.find((set) => {
  return set.name === 'BD-1';
});
</script>

<template>
  <v-app>
    <v-app-bar :image="heroSet.photos[heroSet.heroPhotoIndex].link" absolute>
      <template v-slot:image>
        <v-img :alt="heroSet.name" align-end class="header-image"></v-img>
      </template>
      <v-app-bar-title>
        <NuxtLink to="/">Deconstructed Lego</NuxtLink>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <NuxtPage />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style>
.header-image {
  filter: contrast(1.2) sepia(0.3);
}

.v-app-bar-title a {
  text-shadow: 0px 0px 10px #000000, 0px 0px 10px #000000;
  color: white;
  font-weight: bold;
}
</style>
