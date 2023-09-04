<script setup lang="ts">
import rivendellImages from '../../utils/rivendell-images';

useHead({
    title: 'Rivendell - Deconstructed',
});
const images = rivendellImages;
</script>

<template>
    <section class="container">
        <div class="w6 h2">
            <v-img :src="images.boxArt.link" :alt="images.boxArt.altText" />
            <p>{{ images.boxArt.description }}</p>
        </div>
        <div class="w3 h1">
            <v-img :src="images.boxInBox.link" :alt="images.boxInBox.altText" />
        </div>
        <div class="w3 h1">
            <v-img :src="images.fullOfBags.link" :alt="images.fullOfBags.altText" />
        </div>


        <div class="w3 h1">
            <v-img :src="images.stickers.link" :alt="images.stickers.altText" />
        </div>
        <div class="w6 h2">
            <v-img :src="images.books.link" :alt="images.books.altText" />
        </div>
        <div class="w3 h1">
            <v-img :src="images.basePlates.link" :alt="images.basePlates.altText" />
        </div>

    </section>
</template>

<style scoped>
.container {
    margin-top: 1.5rem;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(27, 1fr);
    grid-gap: 0.5rem;
}

p {
    padding-left: 1rem;
    padding-right: 1rem;
}

@media screen and (max-width: 420px) {
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
.box-art {
    grid-column: span 6;
    grid-row: span 4;
}

.w2 {
    grid-column: span 2;
}

.w3 {
    grid-column: span 3;
}

.w4 {
    grid-column: span 4;
}

.w5 {
    grid-column: span 5;
}

.w6 {
    grid-column: span 6;
}

.w7 {
    grid-column: span 7;
}

.w8 {
    grid-column: span 8;
}

.w9 {
    grid-column: span 9;
}

.h1 {
    grid-row: span 1;
}

.h2 {
    grid-row: span 2;
}

.h3 {
    grid-row: span 3;
}

.h4 {
    grid-row: span 4;
}

.h5 {
    grid-row: span 5;
}

.h6 {
    grid-row: span 6;
}

.h7 {
    grid-row: span 7;
}

.h8 {
    grid-row: span 8;
}

.h9 {
    grid-row: span 9;
}

.h10 {
    grid-row: span 10;
}

.h11 {
    grid-row: span 11;
}

.h12 {
    grid-row: span 12;
}
</style>
