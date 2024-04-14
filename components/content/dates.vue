<script setup lang="ts">
interface Props {
  dates: string[];
  class?: string;
}

const props = defineProps<Props>();
const dates = props.dates;
const dateObjects = dates.map((date) => {
  return new Date(date);
});
</script>

<template>
  <div :class="`text-medium-emphasis text-caption ${props.class || ''}`">
    <span>Posted: {{ dateObjects[0].toLocaleDateString() }}</span>

    <template v-if="dateObjects.length > 1">
      <span>, Updated: </span>
      <span v-for="date in dateObjects">
        {{ date.toLocaleDateString() }} |
      </span>
    </template>
  </div>
</template>
