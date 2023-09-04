<script setup lang="ts">
import rivendellImages from '../../utils/rivendell-images';

useHead({
    title: 'Rivendell - Deconstructed',
});
const images = rivendellImages;
</script>

<template>
    <section class="container">
        <div class="w9 h5">
            <v-img :src="images.boxArt.link" :alt="images.boxArt.altText" />
            <p>{{ images.boxArt.description }}</p>
        </div>

        <!-- todo pop somewhere else -->
        <div class="w9 h2">
            <v-img :src="images.boxInBox.link" :alt="images.boxInBox.altText" />
        </div>

        <div class="w4 h3">
            <v-img :src="images.stickers.link" :alt="images.stickers.altText" />
        </div>
        <div class="w5 h4">
            <v-img :src="images.books.link" :alt="images.books.altText" />
        </div>
        <div class="w4 h3">
            <v-img :src="images.basePlates.link" :alt="images.basePlates.altText" />
        </div>
        <div class="w4 h2">
            <v-img :src="images.fullOfBags.link" :alt="images.fullOfBags.altText" />
        </div>

        <div class="w9 h6">
            <v-img :src="images.bags1_2.link" :alt="images.bags1_2.altText" />
        </div>

        <div class="w6 h4">
            <v-img :src="images.bags3_4.link" :alt="images.bags3_4.altText" />
        </div>
        <div class="w3 h2">
            <v-img :src="images.bag5.link" :alt="images.bag5.altText" />
        </div>
        <div class="w3 h6">
            <v-img :src="images.bag8.link" :alt="images.bag8.altText" />
        </div>

        <div class="w6 h4">
            <v-img :src="images.bag6.link" :alt="images.bag6.altText" />
        </div>


        <div class="w3 h3">
            <v-img :src="images.bag7.link" :alt="images.bag7.altText" />
        </div>
        <div class="w6 h3">
            <v-img :src="images.bag10Angled.link" :alt="images.bag10Angled.altText" />
        </div>

        <div class="w3 h3">
            <v-img :src="images.bag9.link" :alt="images.bag9.altText" />
        </div>
        <div class="w3 h2">
            <v-img :src="images.bag11.link" :alt="images.bag11.altText" />
        </div>
        <div class="w3 h3">
            <v-img :src="images.bag10.link" :alt="images.bag10.altText" />
        </div>

        <div class="w5 h4">
            <v-img :src="images.bag11_1x1.link" :alt="images.bag11_1x1.altText" />
        </div>
        <div class="w4 h3">
            <v-img :src="images.bags12_13.link" :alt="images.bags12_13.altText" />
        </div>
        <div class="w4 h2">
            <v-img :src="images.bag14.link" :alt="images.bag14.altText" />
        </div>

        <div class="w5 h4">
            <v-img :src="images.bag15.link" :alt="images.bag15.altText" />
        </div>
        <div class="w4 h3">
            <v-img :src="images.bags16_17.link" :alt="images.bags16_17.altText" />
        </div>

        <div class="w4 h4">
            <v-img :src="images.bag18.link" :alt="images.bag18.altText" />
        </div>
        <div class="w5 h3">
            <v-img :src="images.bag19.link" :alt="images.bag19.altText" />
        </div>
        <div class="w3 h2">
            <v-img :src="images.bags16_17Angled.link" :alt="images.bags16_17Angled.altText" />
        </div>
        <div class="w2 h2">
            <v-img :src="images.tinyivy.link" :alt="images.tinyivy.altText" />
        </div>
    </section>
</template>

<style scoped>
.container {
    margin-top: 1.5rem;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(81, 171px);
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
