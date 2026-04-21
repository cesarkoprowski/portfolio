import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/modules/home/HomeView.vue";
import SkillsView from "@/modules/skills/SkillsView.vue";
import ProjectsView from "@/modules/projects/ProjectsView.vue";
import HighlightsView from "@/modules/highlights/HighlightsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/skills",
      name: "skills",
      component: SkillsView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/highlights",
      name: "highlights",
      component: HighlightsView,
    },
  ],
});

export default router;
