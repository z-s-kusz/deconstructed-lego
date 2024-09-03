<script setup lang="ts">
import rivendellImages from '~/utils/rivendell-images';

const rivendell = {
  path: '/rivendell',
  heroPhoto: rivendellImages.bags3_4.link,
};

useHead({
  title: 'Deconstructed Lego',
  meta: [
    { property: 'og:title', content: 'Deconstructed Lego' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: rivendell.heroPhoto },
    { property: 'og:url', content: 'https://deconstructed-lego.com' },
    { property: 'og:description', content: 'Lego sets set out piece by piece in beautiful arrangements.' },
  ]
});

const setsListData = await queryContent('/set').find();

// not assigned becuase sort mutates the origional data
setsListData.sort((a, b) => {
  const publishedDateA = a.dates[0];
  const publishedDateB = b.dates[0];
  return new Date(publishedDateB) - new Date(publishedDateA);
});
</script>

<template>
  <section class="container">
    <v-card class="grid-item">
      <NuxtLink :to="rivendell.path">
        <v-img :src="rivendell.heroPhoto" alt="Lego Rivendell" class="align-end lego-photo" cover
          aspect-ratio="1/1">
          <v-card-title class="photo-label">Rivendell</v-card-title>
        </v-img>
      </NuxtLink>
    </v-card>

    <v-card v-for="set in setsListData" :key="set._path" class="grid-item">
      <NuxtLink :to="set._path">
        <v-img :src="set.photos[set.heroPhotoIndex].link" :alt="set.name" class="align-end lego-photo" cover
          aspect-ratio="1/1">
          <v-card-title class="photo-label" v-text="set.name"></v-card-title>
        </v-img>
      </NuxtLink>
    </v-card>
  </section>
</template>

<style scoped>
.lego-photo {
  height: 408px;
  width: 408px;
}

.container {
  margin-top: 1.5rem;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(408px, 1fr));
  grid-gap: 0.5rem;
}

@media screen and (max-width: 420px) {
  .lego-photo {
    height: 374px;
    width: 374px;
  }

  .container {
    grid-template-columns: repeat(auto-fit, minmax(374px, 1fr));
    padding-left: 0;
    padding-right: 0;
  }
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
