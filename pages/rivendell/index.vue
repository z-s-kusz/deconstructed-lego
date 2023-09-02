<script setup lang="ts">
import rivendellImages from '../../utils/rivendell-images';

useHead({
    title: 'Rivendell - Deconstructed',
});
const images = rivendellImages;
console.log('hey', images);
</script>

<template>
    <section class="container">
        <div>test look im a test look at me</div>
        <div :class="images.basePlates.class">
            <v-img :src="images.basePlates.link" :alt="images.basePlates.altText" class="lego-image" />
        </div>
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
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(27, 1fr);
    grid-gap: 0.5rem;
}

@media screen and (max-width: 420px) {
    .lego-photo {
        height: 374px;
        width: 374px;
    }

    .container {
        /* grid-template-columns: repeat(auto-fit, minmax(374px, 1fr)); */
        padding-left: 0;
        padding-right: 0;
    }
}

.grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* styles for each image go below here. place any other styles above this line */
/* --------------------------------------------------------------------------- */
.base-plates {
    grid-area: 1 / 1 / 4 / 4;
}
</style>
