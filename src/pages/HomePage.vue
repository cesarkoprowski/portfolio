<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import { SidebarProvider } from "@/components/ui/sidebar";
</script>

<template>
  <SidebarProvider>
    <Navbar />
    <main>
      <RouterView />
    </main>
  </SidebarProvider>
</template>
