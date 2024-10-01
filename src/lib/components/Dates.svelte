<!-- configurte for ssg -->
<!-- style -->
<script lang="ts">
    interface Props {
        dates: string[];
    }

    const { dates }: Props = $props();
    const dateObjects = dates.map((date) => {
        return new Date(date);
    });
</script>

<div class="dates">
    <span>Posted: { dateObjects[0].toLocaleDateString() }</span>

    {#if dateObjects.length > 1}
        <span>, Updated:</span>
        {#each dateObjects as date, index}
            {#if index > 0}
                <span>&nbsp;{ date.toLocaleDateString() }</span>
            {/if}
        {/each}
    {/if}
</div>

<style>
    .dates {
        display: flex;
        justify-content: center;
    }
</style>
