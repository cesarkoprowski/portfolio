<template>
  <div class="group relative">
    <div class="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:glass-card-hover">
      <div class="absolute -inset-1 bg-gradient-to-r from-cyan-600/0 via-blue-600/0 to-cyan-600/0 group-hover:from-cyan-600/20 group-hover:via-blue-600/20 group-hover:to-cyan-600/20 rounded-2xl blur-lg transition-all duration-700 opacity-0 group-hover:opacity-100" />

      <div class="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-cyan-400/30 transition-all duration-500">
        <div class="relative overflow-hidden">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-56 object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div class="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
        </div>

        <CardContent class="p-6 relative">
          <div class="space-y-5">
            <div>
              <h3 class="text-2xl font-bold text-gray-100 mb-3 group-hover:text-blue-200 transition-colors duration-300">
                {{ project.title }}
              </h3>
              <ProjectDescription :text="project.description" :max-length="130" />
            </div>

            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="tag in project.tags"
                :key="tag"
                variant="secondary"
                class="text-xs bg-white/20 text-gray-100 border border-white/30 hover:bg-blue-500/40 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm"
              >
                {{ tag }}
              </Badge>
            </div>

            <div class="flex gap-3 pt-3">
              <Button
                v-if="project.link"
                tag="a"
                :href="project.link === 'disabled' ? undefined : project.link"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                :class="[
                  'flex-1 rounded-md font-medium text-white text-sm transition-all duration-300 text-center',
                  project.link === 'disabled'
                    ? 'bg-gray-500 opacity-60 cursor-not-allowed pointer-events-none'
                    : 'cursor-pointer bg-gradient-to-r from-emerald-500 to-cyan-500 bg-[length:200%_auto] hover:bg-[position:right_center]',
                ]"
              >
                <ExternalLink :size="16" />
                View Project
              </Button>

              <Button
                tag="a"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="secondary"
                :class="[
                  'bg-white/20 hover:bg-white/30 text-gray-100 border border-white/30 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm',
                  !project.link ? 'w-full' : '',
                ]"
              >
                <Github :size="16" />
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExternalLink, Github } from "lucide-vue-next";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { CardContent } from "@/shared/components/ui/card";
import ProjectDescription from "@/modules/projects/components/ProjectDescription.vue";
import type { Project } from "@/modules/projects/data/projects";

defineProps<{
  project: Project;
}>();
</script>
