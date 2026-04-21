<template>
  <div :class="cn(badgeVariants({ variant }), className)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cva } from "class-variance-authority";
import { computed, useAttrs } from "vue";
import { cn } from "@/shared/lib/utils";

defineOptions({
  inheritAttrs: false,
});

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-cyan-500 text-slate-950",
        secondary: "border-transparent bg-white/20 text-white",
        destructive: "border-transparent bg-red-600 text-white",
        outline: "border-white/30 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "default",
});

const attrs = useAttrs();
const className = computed(() => attrs.class);
</script>
