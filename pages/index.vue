<script setup lang="ts">
const setsListData = await queryContent('/set').find();

// not assigned becuase sort mutates the origional data
setsListData.sort((a, b) => {
  const publishedDateA = a.dates[0];
  const publishedDateB = b.dates[0];
  return new Date(publishedDateA) - new Date(publishedDateB);
});
</script>

<template>
  <section class="container">
    <v-card v-for="set in setsListData" :key="set._path" class="grid-item">
      <NuxtLink :to="set._path">
        <v-img
          :src="set.photos[set.heroPhotoIndex].link"
          :alt="set.name"
          class="align-end lego-photo"
          cover
          aspect-ratio="1/1"
        >
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
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(408px, 1fr));
  grid-gap: 0.5rem;
}

@media screen and (max-width: 408px) {
  .lego-photo {
    height: 360px;
    width: 360px;
  }
  .container {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
}
.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
