<template>
  <PageWrapper background="/skillspage_bg.png">
    <div class="items-center flex justify-center mb-10 sm:mb-15 md:mb-20 lg:mb-25">
      <h1 class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-4 font-bold">
        My Tech Skills
      </h1>
    </div>
    <div class="w-full max-w-6xl mx-auto flex flex-col gap-4">
      <InfiniteLogoCarousel />
      <InfiniteLogoCarousel :reverse="true" />
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import InfiniteLogoCarousel from "@/modules/skills/components/InfiniteLogoCarousel.vue";
import PageWrapper from "@/shared/components/layout/PageWrapper.vue";
</script>
