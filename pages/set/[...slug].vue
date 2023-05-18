<script setup lang="ts">
import Dates from '~/components/content/dates.vue';

const { path } = useRoute();

const setData = await queryContent().where({ _path: path }).findOne();
const themeDisplay = setData.legoSubtheme ?
  `${setData.legoTheme}, ${setData.legoSubtheme}` :
  setData.legoTheme;
const releaseDate = new Date(setData.dateReleased).toLocaleDateString();
</script>

<template>
  <v-sheet :color="setData.theme1" class="stats">
    <v-card class="blog">
      <header>
        <h1>
          <a :href="setData.bricksetLink">{{ setData.name }}</a>
        </h1>
        <table>
          <tbody>
            <tr>
              <td>Set Number:</td>
              <td>{{ setData.legoId }}</td>
            </tr>
            <tr>
              <td>Piece Count:</td>
              <td>{{ setData.pieces }}</td>
            </tr>

            <tr>
              <td>Release Date:</td>
              <td>{{ releaseDate }}</td>
            </tr>
            <tr>
              <td>Theme:</td>
              <td>{{ themeDisplay }}</td>
            </tr>
          </tbody>
        </table>
      </header>
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
header {
  margin-bottom: 1rem;
}

td {
  padding: 2px 0;
}

td:nth-child(2) {
  padding: 2px 1rem;
}

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
