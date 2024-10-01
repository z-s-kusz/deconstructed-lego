<script lang="ts">
    import rivendellImages from "$lib/special-sets/rivendell-images";
    interface Props {
        propTitle?: string,
        image?: string,
        propUrl?: string,
    }

    const defaultTitle = 'Deconstructed Lego';
    const defaultUrl = 'https://www.deconstructed-lego.com';
    const {
        propTitle = defaultTitle,
        image = rivendellImages.bag10.link,
        propUrl = defaultUrl,
    }: Props = $props();

    const title = propTitle === defaultTitle ? defaultTitle : `${propTitle} | ${defaultTitle}`;
    const url = propUrl === defaultUrl ? defaultUrl : defaultUrl + propUrl;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="og:title" content={title} />
    <meta name="og:type" content="website" />
    <meta name="og:image" content={image} />
    <meta name="og:url" content={url} />
    <meta name="og:description" content="Legos set out piece by piece in beautiful arrangements." />
</svelte:head>
