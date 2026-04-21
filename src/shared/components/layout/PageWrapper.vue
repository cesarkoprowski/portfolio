<template>
  <div
    class="relative min-h-screen bg-cover bg-center flex items-center"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div class="w-full pl-[calc(var(--sidebar-width)+4vh)] pr-[4vh] py-[var(--main-padding-y)]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  background: string;
}>();
</script>
