<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
<template>
  <!-- elevation="2" -->
  <v-footer class="footer" elevation="4" absolute>
    <p><NuxtLink to="/about">About</NuxtLink></p>
    <p>&copy; {{ currentYear }} Zach Kusz | All rights reserved.</p>
  </v-footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
