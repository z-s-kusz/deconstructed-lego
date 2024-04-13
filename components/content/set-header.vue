<script setup lang="ts">
interface Props {
  setData: any;
}

const props = defineProps<Props>();
const themeDisplay = props.setData.legoSubtheme ?
  `${props.setData.legoTheme}, ${props.setData.legoSubtheme}` :
  props.setData.legoTheme;
const releaseDate = new Date(props.setData.dateReleased).toLocaleDateString();
</script>

<template>
  <header>
    <h1>
      <a :href="setData.bricksetLink">{{ setData.name }}</a>
    </h1>
    <table>
      <tbody>
        <tr>
          <td>Set Number:</td>
          <td>{{ props.setData.legoId }}</td>
        </tr>

        <tr>
          <td>Piece Count:</td>
          <td>{{ props.setData.pieces }}</td>
        </tr>

        <tr>
          <td>Release Date:</td>
          <td>{{ releaseDate }}</td>
        </tr>

        <tr>
          <td>Theme:</td>
          <td>{{ themeDisplay }}</td>
        </tr>
      </tbody>
    </table>
  </header>
</template>

<style scoped>
header {
  margin-bottom: 1rem;
}

td {
  padding: 2px 0;
}

td:nth-child(2) {
  padding: 2px 1rem;
}
</style>
