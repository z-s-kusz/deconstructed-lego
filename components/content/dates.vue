<script setup lang="ts">
interface Props {
  dates: string[];
}

const props = defineProps<Props>();
const dates = props.dates;
const dateObjects = dates.map((date) => {
  return new Date(date);
});
</script>

<template>
  <div class="text-medium-emphasis text-caption">
    <span>Posted: {{ dateObjects[0].toDateString() }}</span>

    <template v-if="dateObjects.length > 1">
      <span>, Updated: </span>
      <span v-for="date in dateObjects">
        {{ date.toDateString() }} |
      </span>
    </template>
  </div>
</template>
