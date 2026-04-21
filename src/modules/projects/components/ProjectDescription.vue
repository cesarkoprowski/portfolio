<template>
  <p class="text-gray-200 text-sm leading-relaxed">
    <template v-if="text.length <= maxLength">
      {{ text }}
    </template>
    <template v-else>
      {{ isExpanded ? text : `${text.substring(0, maxLength)}...` }}
      <button
        type="button"
        class="ml-1 font-semibold text-cyan-300 cursor-pointer underline hover:text-cyan-200 border-none bg-transparent p-0"
        @click="isExpanded = !isExpanded"
      >
        {{ isExpanded ? "See Less" : "See More" }}
      </button>
    </template>
  </p>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  text: string;
  maxLength: number;
}>();

const isExpanded = ref(false);
</script>
