<template>
  <div class="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div
      :class="[
        'flex w-max hover:[animation-play-state:paused]',
        reverse ? 'animate-scroll-reverse' : 'animate-scroll',
      ]"
    >
      <div v-for="(logo, index) in extendedLogos" :key="`${logo.alt}-${index}`" class="flex-shrink-0 mx-2">
        <img
          :src="logo.src"
          :alt="logo.alt"
          class="h-16 w-auto object-contain bg-white/20 rounded-xl p-2"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from "vue";

const props = withDefaults(
  defineProps<{
    reverse?: boolean;
  }>(),
  {
    reverse: false,
  }
);

const { reverse } = toRefs(props);

const logos = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "react",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    alt: "aws",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    alt: "csharp",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    alt: "dotnet",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    alt: "github",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    alt: "git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    alt: "nextjs",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    alt: "vuejs",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "python",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    alt: "cplusplus",
  },
];

const extendedLogos = computed(() => [...logos, ...logos, ...logos, ...logos]);
</script>
