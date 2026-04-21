<template>
  <div class="w-full max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="animate-fade-in-up"
        :style="{ animationDelay: `${index * 100}ms` }"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "@/modules/projects/components/ProjectCard.vue";
import { projects } from "@/modules/projects/data/projects";
</script>
