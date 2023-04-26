<script setup lang="ts">
import Dates from '~/components/content/dates.vue';

const { path } = useRoute();
const { data: setData } = await useAsyncData('set', () => {
  return queryContent().where({ _path: path }).findOne();
});

const themeDisplay = setData.value.legoSubtheme ?
  `Themes: ${setData.value.legoTheme}, ${setData.value.legoSubtheme}` :
  `Theme: ${setData.value.legoTheme}`;
const releaseDate = new Date(setData.value.dateReleased).toDateString();
</script>

<template>
  <v-sheet :color="setData.theme1" class="stats">
    <v-card class="blog">
      <header>
        <h1>
          <a :href="setData.bricksetLink">{{ setData.name }}</a>
        </h1>
        <p>{{ themeDisplay }}</p>
        <p>Piece Count: {{ setData.pieces }}</p>
        <p>Release Date: {{ releaseDate }}</p>
      </header>
      <v-img
          :src="setData.brickSetImage"
          :alt="`${setData.name} Brickset DB Image`"
          class="lego-image"          
      />
      <v-divider class="divider"></v-divider>
      <ContentDoc />
      <Dates :dates="setData.dates" />
    </v-card>

    <v-card v-for="photo in setData.photos" class="image-container">
      <v-img
        :src="photo.link"
        :alt="photo.altText"
        class="align-end lego-image"
      >
        <v-card-title class="photo-label" v-text="photo.altText"></v-card-title>
      </v-img>
    </v-card>
  </v-sheet>
</template>

<style scoped>
header {
  margin-bottom: 1rem;
}
.stats {
  padding: 2rem;
}

.image-container {
  margin-top: 1rem;
}
.photo-label {
  white-space: normal;
}
.divider {
  margin: 1rem;
}

a {
  color: white;
  text-decoration-color: white;
}

.lego-image {
  height: auto;
  max-height: 90vh;
}

.blog {
  padding: 1rem;
}
</style>
