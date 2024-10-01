<script lang="ts">
	import Dates from "$lib/components/Dates.svelte";
	import SetHeader from "$lib/components/SetHeader.svelte";
	import OpenGraphMeta from "$lib/components/OpenGraphMeta.svelte";
    import rivendellImages from "$lib/special-sets/rivendell-images";
	import type { SetMetaData } from "$lib/types/set-types";

    const metadata = {
        name: 'Rivendell',
        legoTheme: 'The Lord of the Rings',
        dateReleased: '03-05-23',
        legoId: '10316',
        pieces: 6167,
        bricksetLink: 'https://brickset.com/sets/10316-1/The-Lord-of-the-Rings-Rivendell',
        builtImage: '',
        photos: [],
        heroPhotoIndex: 0,
        dates: [],
    } as SetMetaData;
    const images = rivendellImages;
</script>

<OpenGraphMeta propTitle="Rivendell" propUrl="/set/rivendell" />

<section class="container">
    <div class="w9">
        <SetHeader {metadata} />
    </div>
    <div class="w9 h5 green">
        <img src={images.boxArt.link} alt={images.boxArt.name} class="box-art" />
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
            some of the grid around the middle of the page doesn't look as good as on desktop.
            Please take a look at this page on a bigger screen to see the intended grid view!
        </p>
        <p>
            As I said, getting the grid to work was waaaay harder than I imagined.
            If I had each image locked to certain sizes instead of relying on CSS Grid
            to do all the heavy lifting it would be a lot easier
            but I wanted to see what I could do with a set of images at any height and width.
            Hopefully this will be even easier in the future with CSS Grid Level 3, a.k.a. masonry layout.
            The end result is pretty neat and just how I envisioned it.
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
        <Dates dates={[metadata.dateReleased]} />
    </div>

    <div class="w4 h3 green">
        <img src={images.stickers.link} alt={images.stickers.name} />
    </div>
    <div class="w5 h4 blue">
        <img src={images.books.link} alt={images.books.name} />
    </div>
    <div class="w4 h3 tan">
        <img src={images.basePlates.link} alt={images.basePlates.name} />
    </div>
    <div class="w4 h2 blue">
        <img src={images.fullOfBags.link} alt={images.fullOfBags.name} />
    </div>
    <div class="w1 h2 tan spacer"></div>

    <div class="w9 h6 tan">
        <img src={images.bags1_2.link} alt={images.bags1_2.name} />
    </div>

    <div class="w6 h4 green">
        <img src={images.bags3_4.link} alt={images.bags3_4.name} />
    </div>
    <div class="w3 h2 blue">
        <img src={images.bag5.link} alt={images.bag5.name} />
    </div>
    <div class="w3 h6 tan">
        <img src={images.bag8.link} alt={images.bag8.name} height="100%" />
    </div>

    <div class="w6 h4 green">
        <img src={images.bag6.link} alt={images.bag6.name} />
    </div>


    <div class="w3 h3 blue">
        <img src={images.bag7.link} alt={images.bag7.name} height="100%" />
    </div>
    <div class="w6 h3 blue">
        <img src={images.bag10Angled.link} alt={images.bag10Angled.name} />
    </div>

    <div class="w3 h3 tan">
        <img src={images.bag9.link} alt={images.bag9.name} height="100%" />
    </div>
    <div class="w3 h2 green">
        <img src={images.bag11.link} alt={images.bag11.name} />
    </div>
    <div class="w3 h3 blue">
        <img src={images.bag10.link} alt={images.bag10.name} />
    </div>
    <div class="w3 h1 tan spacer"></div>

    <div class="w5 h4 blue">
        <img src={images.bag11_1x1.link} alt={images.bag11_1x1.name} />
    </div>
    <div class="w4 h3 green">
        <img src={images.bags12_13.link} alt={images.bags12_13.name} height="100%" />
    </div>
    <div class="w4 h2 green">
        <img src={images.bag14.link} alt={images.bag14.name} />
    </div>

    <div class="w5 h4 green">
        <img src={images.bag15.link} alt={images.bag15.name} />
    </div>
    <div class="w4 h3 blue">
        <img src={images.bags16_17.link} alt={images.bags16_17.name} />
    </div>

    <div class="w4 h4 tan">
        <img src={images.bag18.link} alt={images.bag18.name} />
    </div>
    <div class="w5 h3 blue">
        <img src={images.bag19.link} alt={images.bag19.name} />
    </div>
    <div class="w5 h3 tan">
        <img src={images.bags16_17Angled.link} alt={images.bags16_17Angled.name} />
    </div>
    <div class="w4 h3 green">
        <img src={images.bag21.link} alt={images.bag21.name} />
    </div>

    <div class="w2 h3 blue unflex">
        <img src={images.tinyivy.link} alt={images.tinyivy.name} />
        <p>Tiny Ivy chasing bugs under the lamp during a late photo session.</p>
    </div>
    <div class="w3 h2 green">
        <img src={images.bag22.link} alt={images.bag22.name} />
    </div>
    <div class="w4 h2 tan">
        <img src={images.bag23.link} alt={images.bag23.name} />
    </div>
    <div class="w3 h2 tan">
        <img src={images.bags24_25.link} alt={images.bags24_25.name} />
    </div>

    <div class="w6 h4 green">
        <img src={images.bag20.link} alt={images.bag20.name} />
    </div>
    <div class="w3 h3 blue">
        <img src={images.bag27Geometric.link} alt={images.bag27Geometric.name} />
    </div>

    <div class="w3 h2 blue">
        <img src={images.bag27Organic.link} alt={images.bag27Organic.name} />
    </div>
    <div class="w6 h3 tan">
        <img src={images.bag26.link} alt={images.bag26.name} />
    </div>
    <div class="w3 h4 blue">
        <img src={images.bag36.link} alt={images.bag36.name} />
    </div>

    <div class="w3 h3 tan">
        <img src={images.bag28_29.link} alt={images.bag28_29.name} />
    </div>
    <div class="w3 h2 blue">
        <img src={images.bag31_32.link} alt={images.bag31_32.name} />
    </div>
    <div class="w3 h2 blue">
        <img src={images.bag34.link} alt={images.bag34.name} />
    </div>

    <div class="w4 h3 tan">
        <img src={images.bag30.link} alt={images.bag30.name} />
    </div>
    <div class="w2 h1 green spacer"></div>
    <div class="w5 h4 green">
        <img src={images.bag35.link} alt={images.bag35.name} />
    </div>
    <div class="w4 h3 tan">
        <img src={images.bag33.link} alt={images.bag33.name} />
    </div>
    <div class="w5 h4 tan">
        <img src={images.bags37_38_39.link} alt={images.bags37_38_39.name} />
    </div>
    <div class="w4 h3 green">
        <img src={images.bag38.link} alt={images.bag38.name} />
    </div>

    <div class="w3 h2 blue">
        <img src={images.bag40.link} alt={images.bag40.name} />
    </div>
    <div class="w3 h2 tan">
        <img src={images.bag41.link} alt={images.bag41.name} />
    </div>
    <div class="w3 h2 green">
        <img src={images.bags42_43.link} alt={images.bags42_43.name} />
    </div>

    <div class="w4 h5 tan unflex">
        <img src={images.bag41Tiles.link} alt={images.bag41Tiles.name} />
        <p>Lego candy buttons sheet!</p>
    </div>
    <div class="w5 h3 blue">
        <img src={images.bag44.link} alt={images.bag44.name} />
    </div>
    <div class="w5 h2 green">
        <img src={images.bag39.link} alt={images.bag39.name} />
    </div>

    <div class="w9 h3 blue">
        <img src={images.bag45.link} alt={images.bag45.name} />
    </div>

    <div class="w3 h4 blue">
        <img src={images.bag46.link} alt={images.bag46.name} />
    </div>
    <div class="w3 h3 tan">
        <img src={images.bags48_49.link} alt={images.bags48_49.name} />
    </div>
    <div class="w3 h3 blue">
        <img src={images.bag47.link} alt={images.bag47.name} />
    </div>
    <div class="w6 h1 green"></div>

</section>

<style>
.writeup p {
    margin-right: auto;
    margin-left: auto;
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
img {
    object-fit: contain;
}

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

/* .w7 {
    grid-column: span 7;
}

.w8 {
    grid-column: span 8;
} */

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

/* .h7 {
    grid-row: span 7;
}

.h8 {
    grid-row: span 8;
}

.h9 {
    grid-row: span 9;
} */
/* --------------------------------------------------------------------------- */

@media screen and (max-width: 500px) {
    .container {
        padding: 0;
    }
}
</style>
