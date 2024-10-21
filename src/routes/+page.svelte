<script lang="ts">
    import rivendellImages from '$lib/special-sets/rivendell-images';
	import type { Photo, Set } from '$lib/types/set-types';
    let { data } = $props();

    const rivendell = {
        name: 'rivendell',
        heroPhoto: rivendellImages.bags3_4.link,
        width: rivendellImages.bags3_4.width,
        height: rivendellImages.bags3_4.height,
    };

    const setPhoto = (set: Set): Photo => {
        return set.metadata.photos[set.metadata.heroPhotoIndex];
    };
</script>

<section class="container">
    <a href={`./set/${rivendell.name}`} class="grid-item">
        <figure>
            <img src={rivendell.heroPhoto} alt="Rivendell"
                width={rivendell.width} height={rivendell.height} />
            <figcaption>Rivendell</figcaption>
        </figure>
    </a>

    {#each data.sets as set }
        <a href={`./set/${set.name}`} class="grid-item">
            <figure>
                <img src={setPhoto(set).link} alt={set.name}
                    loading="lazy" width={setPhoto(set).width} height={setPhoto(set).height} />
                <figcaption>{set.metadata.name}</figcaption>
            </figure>
        </a>
    {/each}
</section>

<style>
    .container {
        margin-top: 1.5rem;
        padding: 1rem;
        display: grid;
        /* https://css-tricks.com/intrinsically-responsive-css-grid-with-minmax-and-min/ */
        grid-template-columns: repeat(auto-fill, minmax(min(var(--square-image-size), 100%), 1fr));
        grid-gap: 1rem;
    }

    .grid-item {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--image-wrap-color);

        img {
            object-fit: cover;
            height: var(--square-image-size);
            min-width: var(--square-image-size);
        }
    }

    .container a {
        border-bottom-right-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
    }
</style>
