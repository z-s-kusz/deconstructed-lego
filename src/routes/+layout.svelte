<script lang="ts">
    import OpenGraphMeta from '$lib/components/OpenGraphMeta.svelte';
    import '$lib/styles/global.css';

    const currentYear = new Date().getFullYear();
</script>

<OpenGraphMeta />

<header class="site-header">
    <h1>
        <div class="title-gradient">
            <a href="/">Deconstructed Lego</a>
        </div>
    </h1>
</header>

<slot />

<footer class="footer">
    <p><a href="/about">About</a></p>
    <p>&copy; { currentYear } Zach Kusz | All rights reserved.</p>
</footer>

<style>
    .site-header {
        background-image: url('https://live.staticflickr.com/65535/54022075669_bdf0cec84a_h.jpg');
        background-position: 25% 50%;
    }

    .title-gradient {
        padding: 0 1rem;
        width: fit-content;
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 7%, rgba(0,0,0,0.85) 15%, rgba(11,11,11,0.8) 70%, rgba(64,64,64,0) 100%);
    }
</style>
