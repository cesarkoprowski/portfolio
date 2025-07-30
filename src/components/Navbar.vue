<script setup lang="ts">
import { Home, FolderGit, PanelLeft } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import Label from "@/components/ui/label/Label.vue";
import { ref } from "vue";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const isSidebarOpen = ref(true);
const isHovered = ref(false);

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Projects",
    url: "#",
    icon: FolderGit,
  },
];
</script>

<template>
  <Sidebar :class="[isSidebarOpen ? 'w-65' : 'w-19']">
    <SidebarContent class="bg-[#0a0c10]">
      <SidebarGroup>
        <SidebarGroupLabel class="text-white flex justify-between">
          <!-- Label ao colapsar -->
          <Label
            class="text-lg cursor-pointer flex items-center justify-center w-full"
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
            @click="!isSidebarOpen && (isSidebarOpen = true)"
            v-if="!isSidebarOpen"
          >
            <template v-if="!isHovered"> Cesk. </template>
            <PanelLeft v-else class="w-5 h-5" />
          </Label>

          <!-- Label e botão quando aberto -->
          <template v-else>
            <Label class="text-lg">Cesk.</Label>
            <Button
              variant="ghost"
              class="hover:text-white w-6 h-8"
              @click="isSidebarOpen = false"
            >
              <PanelLeft class="h-5 w-5" />
            </Button>
          </template>
        </SidebarGroupLabel>

        <SidebarGroupContent class="pt-2">
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton
                asChild
                class="hover:bg-[#101319] active:bg-[#101319] transition-colors duration-200 justify-start pl-5"
              >
                <a
                  :href="item.url"
                  :class="[
                    'flex items-center',
                    isSidebarOpen ? 'gap-2 pl-2' : 'justify-start pl-5',
                  ]"
                >
                  <div class="flex justify-start">
                    <component :is="item.icon" class="w-5 h-5 text-white" />
                  </div>
                  <span
                    class="text-white font-normal transition-all duration-300 ease-in-out"
                    :class="{
                      'opacity-100 ml-1 visible': isSidebarOpen,
                      'opacity-0 ml-0 invisible': !isSidebarOpen,
                    }"
                    v-show="true"
                  >
                    {{ item.title }}
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
