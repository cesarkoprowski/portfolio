<template>
  <component
    :is="tag"
    v-bind="delegated"
    :class="cn(buttonVariants({ variant, size }), className)"
    :type="resolvedType"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { cva } from "class-variance-authority";
import { computed, useAttrs } from "vue";
import { cn } from "@/shared/lib/utils";

defineOptions({
  inheritAttrs: false,
});

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-white/30 bg-white/10 hover:bg-white/20",
        secondary: "bg-white/20 text-white hover:bg-white/30",
        ghost: "hover:bg-white/10",
        link: "text-cyan-300 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps {
  tag?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  variant: "default",
  size: "default",
});

const attrs = useAttrs();

const className = computed(() => attrs.class);

const delegated = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

const resolvedType = computed(() => (props.tag === "button" ? "button" : undefined));
</script>
