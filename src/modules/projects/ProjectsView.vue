<template>
  <PageWrapper background="/projectspage_bg.png">
    <div class="flex items-center justify-center w-full">
      <ProjectsDisplay />
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/shared/components/layout/PageWrapper.vue";
import ProjectsDisplay from "@/modules/projects/components/ProjectsDisplay.vue";
</script>
