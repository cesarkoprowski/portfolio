<template>
  <div :class="cn('p-6 pt-0', className)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { cn } from "@/shared/lib/utils";

defineOptions({
  inheritAttrs: false,
});

defineProps<{}>();

const attrs = useAttrs();
const className = computed(() => attrs.class);
</script>
