<script setup lang="ts">
import Dates from '~/components/content/dates.vue';
import setHeader from '~/components/content/set-header.vue';

const { path } = useRoute();
const setData = await queryContent().where({ _path: path }).findOne();
</script>

<template>
  <v-sheet :color="setData.theme1" class="stats">
    <v-card class="blog">
      <setHeader :setData="setData" />
      <v-img :src="setData.builtImage" :alt="`${setData.name} Brickset DB Image`" class="lego-image" />
      <v-divider class="divider"></v-divider>
      <section class="writeup">
        <ContentDoc />
        <Dates :dates="setData.dates" />
      </section>
    </v-card>

    <v-card v-for="photo in setData.photos" class="image-container">
      <v-img :src="photo.link" :alt="photo.altText" class="align-end lego-image">
        <v-card-title class="photo-label" v-text="photo.altText"></v-card-title>
      </v-img>
    </v-card>
  </v-sheet>
</template>

<style scoped>
.stats {
  padding: 2rem;
}

.image-container {
  margin-top: 1rem;
}

@media screen and (max-width: 500px) {
  header {
    margin-bottom: 0.5rem;
  }

  .stats {
    padding: 0;
  }

  .image-container {
    margin-top: 0.5rem;
  }
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

.writeup {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lego-image {
  height: auto;
  max-height: 90vh;
}

.blog {
  padding: 1rem;
}
</style>
