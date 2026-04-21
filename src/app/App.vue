<template>
  <MySidebar />
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import MySidebar from "@/shared/components/navigation/MySidebar.vue";
</script>
