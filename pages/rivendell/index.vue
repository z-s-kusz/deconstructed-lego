<script setup lang="ts">
import rivendellImages from '../../utils/rivendell-images';

useHead({
    title: 'Rivendell - Deconstructed',
});

const images = rivendellImages;
console.log('hey', rivendellImages);
</script>

<template>
    <section class="container">
        <div>test look im a test look at me</div>
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
    grid-template-columns: repeat(auto-fit, minmax(408px, 1fr));
    grid-gap: 0.5rem;
}

@media screen and (max-width: 420px) {
    .lego-photo {
        height: 374px;
        width: 374px;
    }

    .container {
        grid-template-columns: repeat(auto-fit, minmax(374px, 1fr));
        padding-left: 0;
        padding-right: 0;
    }
}

.grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
