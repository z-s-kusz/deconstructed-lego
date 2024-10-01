<script lang="ts">
	import OpenGraphMeta from "$lib/components/OpenGraphMeta.svelte";
</script>

<OpenGraphMeta propTitle="About" />

<main>
    <h2>About</h2>
    <p>
        This site was made to try out Nuxt and static site generation.
        I decided to use pictures of sorted lego piles as the main content for the site instead of making a blog that I would update twice and forget about.
        I added small blurbs to each set because it felt empty, so I guess it's something of a blog now but at least it isn't another tech blog.
        It turns out I didn't like Nuxt, but I liked this site, so I converted it to SvelteKit which I do like :).
    </p>

    <h3>But why the sorting?</h3>
    <p>
        I like legos and find sorting them to be a zen activity.
        I didn't start sorting with the intent of photographing or uploading them.
        I started doing this around 2018 and didn't photograph any until the covid lockdown.
    </p>

    <h3>Photography</h3>
    <p>
        I'm no photographer.
        I use my phone camera, don't set up for lighting and sometimes I even miss my target.
        Now that I have this site I guess there's pressure to do better so I will take more care with future sets, but don't expect much.
    </p>

    <h3>Created By</h3>
    <p>Zach Kusz</p>
    <a href="https://github.com/z-s-kusz">github - zskusz</a>

    <h3>More Images (mostly the same ones though)</h3>
    <p>
        Images are hosted on <a href="https://www.flickr.com/photos/fox-and-wheat/">flickr</a>.
        I decided to go with flickr since a lot of the lego community is there and they have a generous free 1000 uploads.
    </p>
</main>

<style>
    main {
        max-width: min(94%, 1000px);
        margin-right: auto;
        margin-left: auto;
    }
</style>
