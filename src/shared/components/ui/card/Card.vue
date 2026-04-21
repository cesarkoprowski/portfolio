<template>
  <div :class="cn('rounded-xl border border-white/10 bg-slate-900/80 text-gray-100 shadow', className)">
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
