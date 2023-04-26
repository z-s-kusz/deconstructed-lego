<script setup lang="ts">
import AppFooter from './components/content/app-footer.vue';


useHead({
  title: 'Lego Deconstructions',
  link: [{ rel: 'icon', type: 'image/png', href: '/gears-icon.png' }],
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
        <v-img :alt="heroSet.name" align-end></v-img>
      </template>
      <v-app-bar-title><NuxtLink to="/">Deconstructed Lego</NuxtLink></v-app-bar-title>
    </v-app-bar>
    <v-main>
      <NuxtPage />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style>
.v-app-bar-title a {
  text-decoration: none;
  text-shadow: 0px 0px 10px #000000, 0px 0px 10px #000000;
  color: white;
}

.photo-label {
  text-shadow: 0px 0px 10px #000000, 0px 0px 10px #000000;
  text-decoration-color: white;
  color: white;
}

a {
  text-decoration-color: white;
}

/* this is gross, no idea why parsed .md doesn't generate with classes so I can style it easier */
[data-content-id="content:about.md"] p {
  margin-bottom: 2rem;
}

</style>
