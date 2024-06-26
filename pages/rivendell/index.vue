<script setup lang="ts">
import Dates from '~/components/content/dates.vue';
import rivendellImages from '../../utils/rivendell-images';
import setHeader from '~/components/content/set-header.vue';

useHead({
    title: 'Rivendell - Deconstructed',
});
const images = rivendellImages;
const dates = [
    '04-13-24',
];
const setData = {
    name: 'Rivendell',
    legoTheme: 'The Lord of the Rings',
    dateReleased: '03-05-23',
    legoId: '10316',
    pieces: 6167,
    bricksetLink: 'https://brickset.com/sets/10316-1/The-Lord-of-the-Rings-Rivendell',
};
</script>

<template>
    <section class="container">
        <div class="w9">
            <setHeader :setData="setData" />
        </div>
        <div class="w9 h5 green">
            <v-img :src="images.boxArt.link" :alt="images.boxArt.altText" />
        </div>

        <div class="writeup w9 unflex">
            <p>
                Lego Rivendell!
                I did the flat lay, photography and building of this set over August and September of 2023.
                I wanted to give this huge set a unique page layout with an interlaced grid and dang that was difficult!
                It didn't take me 7 months to get the grid working but it did take 3 long programming sessions,
                the first of which put me off getting this page published until today.
            </p>

            <p>
                Sorry mobile users,
                I figured I could get a simple version of the grid going but it was way harder to get working on desktop than I thought
                so mobile is just the standard image stacks that all my other set pages have.
                Please take a look at this page on a bigger screen to get the full grid view!
            </p>
            <p>
                As I said, getting the grid to work was waaaay harder than I imagined.
                If I had each image locked to certain sizes instead of relying on CSS Grid
                to do all the heavy lifting it would be a lot easier
                but I wanted to see what I could do with a set of images at any height and width.
                The end result is pretty neat and just how I envisioned it
                (except a bit toward the middle I got lazy with).
            </p>
            <p>
                This was a pretty cool build.
                I photographed bags of Legos together where the instructions called for
                building a step with multiple bags - it does a bit to help show how large this set is
                compared to any others on the blog so far.
            </p>
            <p>
                I've wanted to add a basic image zoom feature for a while
                and this page really calls for it since some images are smaller to fit the grid.
                Zoom coming soon hopefully!
            </p>
            <Dates :dates="dates" class="dates" />
        </div>

        <div class="w4 h3 green">
            <v-img :src="images.stickers.link" :alt="images.stickers.altText" />
        </div>
        <div class="w5 h4 blue">
            <v-img :src="images.books.link" :alt="images.books.altText" />
        </div>
        <div class="w4 h3 tan">
            <v-img :src="images.basePlates.link" :alt="images.basePlates.altText" />
        </div>
        <div class="w4 h2 blue">
            <v-img :src="images.fullOfBags.link" :alt="images.fullOfBags.altText" />
        </div>
        <div class="w1 h2 tan spacer"></div>

        <div class="w9 h6 tan">
            <v-img :src="images.bags1_2.link" :alt="images.bags1_2.altText" />
        </div>

        <div class="w6 h4 green">
            <v-img :src="images.bags3_4.link" :alt="images.bags3_4.altText" />
        </div>
        <div class="w3 h2 blue">
            <v-img :src="images.bag5.link" :alt="images.bag5.altText" />
        </div>
        <div class="w3 h6 tan">
            <v-img :src="images.bag8.link" :alt="images.bag8.altText" height="100%" />
        </div>

        <div class="w6 h4 green">
            <v-img :src="images.bag6.link" :alt="images.bag6.altText" />
        </div>


        <div class="w3 h3 blue">
            <v-img :src="images.bag7.link" :alt="images.bag7.altText" height="100%" />
        </div>
        <div class="w6 h3 green">
            <v-img :src="images.bag10Angled.link" :alt="images.bag10Angled.altText" />
        </div>

        <div class="w3 h3 tan">
            <v-img :src="images.bag9.link" :alt="images.bag9.altText" height="100%" />
        </div>
        <div class="w3 h2 green">
            <v-img :src="images.bag11.link" :alt="images.bag11.altText" />
        </div>
        <div class="w3 h3 blue">
            <v-img :src="images.bag10.link" :alt="images.bag10.altText" />
        </div>
        <div class="w3 h1 tan spacer"></div>

        <div class="w5 h4 tan">
            <v-img :src="images.bag11_1x1.link" :alt="images.bag11_1x1.altText" />
        </div>
        <div class="w4 h3 green">
            <v-img :src="images.bags12_13.link" :alt="images.bags12_13.altText" height="100%" />
        </div>
        <div class="w4 h2 green">
            <v-img :src="images.bag14.link" :alt="images.bag14.altText" />
        </div>

        <div class="w5 h4 green">
            <v-img :src="images.bag15.link" :alt="images.bag15.altText" />
        </div>
        <div class="w4 h3 blue">
            <v-img :src="images.bags16_17.link" :alt="images.bags16_17.altText" />
        </div>

        <div class="w4 h4 tan">
            <v-img :src="images.bag18.link" :alt="images.bag18.altText" />
        </div>
        <div class="w5 h3 blue">
            <v-img :src="images.bag19.link" :alt="images.bag19.altText" />
        </div>
        <div class="w5 h3 green">
            <v-img :src="images.bags16_17Angled.link" :alt="images.bags16_17Angled.altText" />
        </div>
        <div class="w4 h3 blue">
            <v-img :src="images.bag21.link" :alt="images.bag21.altText" />
        </div>

        <div class="w2 h3 blue unflex">
            <v-img :src="images.tinyivy.link" :alt="images.tinyivy.altText" />
            <p>Tiny Ivy chasing bugs under the lamp during a late photo session.</p>
        </div>
        <div class="w3 h2 green">
            <v-img :src="images.bag22.link" :alt="images.bag22.altText" />
        </div>
        <div class="w4 h2 tan">
            <v-img :src="images.bag23.link" :alt="images.bag23.altText" />
        </div>
        <div class="w3 h2 tan">
            <v-img :src="images.bags24_25.link" :alt="images.bags24_25.altText" />
        </div>

        <div class="w6 h4 green">
            <v-img :src="images.bag20.link" :alt="images.bag20.altText" />
        </div>
        <div class="w3 h3 blue">
            <v-img :src="images.bag27Geometric.link" :alt="images.bag27Geometric.altText" />
        </div>

        <div class="w3 h2 blue">
            <v-img :src="images.bag27Organic.link" :alt="images.bag27Organic.altText" />
        </div>
        <div class="w6 h3 tan">
            <v-img :src="images.bag26.link" :alt="images.bag26.altText" />
        </div>
        <div class="w3 h4 blue">
            <v-img :src="images.bag36.link" :alt="images.bag36.altText" />
        </div>

        <div class="w3 h3 tan">
            <v-img :src="images.bag28_29.link" :alt="images.bag28_29.altText" />
        </div>
        <div class="w3 h2 blue">
            <v-img :src="images.bag31_32.link" :alt="images.bag31_32.altText" />
        </div>
        <div class="w3 h2 blue">
            <v-img :src="images.bag34.link" :alt="images.bag34.altText" />
        </div>

        <div class="w4 h3 tan">
            <v-img :src="images.bag30.link" :alt="images.bag30.altText" />
        </div>
        <div class="w2 h1 green spacer"></div>
        <div class="w5 h4 green">
            <v-img :src="images.bag35.link" :alt="images.bag35.altText" />
        </div>
        <div class="w4 h3 tan">
            <v-img :src="images.bag33.link" :alt="images.bag33.altText" />
        </div>
        <div class="w5 h4 tan">
            <v-img :src="images.bags37_38_39.link" :alt="images.bags37_38_39.altText" />
        </div>
        <div class="w4 h3 green">
            <v-img :src="images.bag38.link" :alt="images.bag38.altText" />
        </div>

        <div class="w3 h2 blue">
            <v-img :src="images.bag40.link" :alt="images.bag40.altText" />
        </div>
        <div class="w3 h2 tan">
            <v-img :src="images.bag41.link" :alt="images.bag41.altText" />
        </div>
        <div class="w3 h2 green">
            <v-img :src="images.bags42_43.link" :alt="images.bags42_43.altText" />
        </div>

        <div class="w4 h5 tan unflex">
            <v-img :src="images.bag41Tiles.link" :alt="images.bag41Tiles.altText" />
            <p>Lego candy buttons sheet!</p>
        </div>
        <div class="w5 h3 blue">
            <v-img :src="images.bag44.link" :alt="images.bag44.altText" />
        </div>
        <div class="w5 h2 green">
            <v-img :src="images.bag39.link" :alt="images.bag39.altText" />
        </div>

        <div class="w9 h3 blue">
            <v-img :src="images.bag45.link" :alt="images.bag45.altText" />
        </div>

        <div class="w3 h4 blue">
            <v-img :src="images.bag46.link" :alt="images.bag46.altText" />
        </div>
        <div class="w3 h3 tan">
            <v-img :src="images.bags48_49.link" :alt="images.bags48_49.altText" />
        </div>
        <div class="w3 h3 blue">
            <v-img :src="images.bag47.link" :alt="images.bag47.altText" />
        </div>
        <div class="w6 h1 green"></div>
    </section>
</template>

<style scoped>
.writeup p {
    margin-right: auto;
    margin-left: auto;
}

.dates {
    display: flex;
    justify-content: center;
}

.container {
    margin-top: 1.5rem;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: max-content;
    grid-gap: 0.5rem;
}

p {
    padding-left: 1rem;
    padding-right: 1rem;
}

section div {
    display: flex;
}

.unflex {
    display: initial;
}

.green {
    background: hsl(137,17%,42%);
    background: linear-gradient(43deg, hsl(137,17%,42%) 0%, hsl(145,18%,34%) 100%);
}
.tan {
    background-color: hsl(22,58%,56%);
    background: linear-gradient(40deg, hsl(22,58%,56%) 0%, hsl(25,57%,42%));
}
.blue {
    background-color: hsl(214,23%,45%);
    background: linear-gradient(48deg, hsl(214,23%,45%) 0%, hsl(213,32%,31%));
}

/* styles for each image */
.box-art {
    grid-column: span 6;
    grid-row: span 4;
}

.w1 {
    grid-column: span 1;
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
/* --------------------------------------------------------------------------- */

@media screen and (max-width: 500px) {
    .container {
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        padding-left: 0;
        padding-right: 0;
    }
    .w1,.w2,.w3,.w4,.w5,.w6,.w7,.w8,.w9,.w10,.w11,.w12 {
        grid-column: span 1;
    }
    .h1,.h2,.h3,.h4,.h5,.h6,.h7,.h8,.h9 {
        grid-row: span 1;
    }
    .spacer {
        display: none;
    }
}
</style>
