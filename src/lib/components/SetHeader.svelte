<script lang="ts">
	import type { SetMetaData } from "$lib/types/set-types";

    interface Props {
        metadata: SetMetaData;
    }
    let { metadata }: Props = $props();

    const themeDisplay = metadata.legoSubtheme ? `${metadata.legoTheme}, ${metadata.legoSubtheme}` : metadata.legoTheme;
    const releaseDate = new Date(metadata.dateReleased).toLocaleDateString();
</script>

<header>
    <h2>
        <a href={metadata.bricksetLink}>{metadata.name}</a>
    </h2>
    <table>
        <tbody>
        <tr>
            <td>Set Number:</td>
            <td>{ metadata.legoId }</td>
        </tr>

        <tr>
            <td>Piece Count:</td>
            <td>{ metadata.pieces }</td>
        </tr>

        <tr>
            <td>Release Date:</td>
            <td>{ releaseDate }</td>
        </tr>

        <tr>
            <td>Theme:</td>
            <td>{ themeDisplay }</td>
        </tr>
        </tbody>
    </table>
</header>

<style>
    header {
        margin-bottom: 1rem;
    }

    td {
        padding: 2px 1rem;
    }
</style>
