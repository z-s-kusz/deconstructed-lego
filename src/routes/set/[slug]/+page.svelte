<script lang="ts">
	import Dates from "$lib/components/Dates.svelte";
    import SetHeader from "$lib/components/SetHeader.svelte";
	import OpenGraphMeta from "$lib/components/OpenGraphMeta.svelte";

    const { data } = $props();
    const Writeup = data.content;
    const images = data.metadata.photos;
</script>

<main class="set-main">
    <OpenGraphMeta
        propTitle={data.metadata.name}
        image={images[data.metadata.heroPhotoIndex].link}
        propUrl="/set/{data.params}"
    />

    <SetHeader metadata={data.metadata} />
    <img src={data.metadata.builtImage} alt="{data.metadata.name} Final Build" />
    <Writeup />
    <Dates dates={data.metadata.dates} />

    {#each images as image}
        <figure>
            <img src={image.link} alt={image.altText} loading="lazy" />
            <figcaption>{image.altText}</figcaption>
        </figure>
    {/each}
</main>

<style>
    .set-main {
        max-width: min(94%, 1000px);
        margin:0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        max-height: 90vh;
    }
    figure {
        background-color: var(--image-wrap-color);
        margin: 1rem 0;
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
    figcaption {
        line-height: 2rem;
    }
    @media(prefers-color-scheme: light) {
        figure {
            /* from tinycss's vars */
            background-color: var(--background-body);
        }
        figcaption {
            border-bottom: 1px solid black;
            border-right: 1px solid black;
            border-bottom-right-radius: var(--border-radius);
        }
    }
</style>
