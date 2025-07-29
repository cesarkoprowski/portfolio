<script setup lang="ts">
import { Home, FolderGit, PanelLeft } from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import Label from "@/components/ui/label/Label.vue";
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
  <Sidebar>
    <SidebarContent class="bg-[#0a0c10]">
      <SidebarGroup>
        <SidebarGroupLabel class="text-white flex justify-between">
          <Label class="text-lg">Cesk.</Label>
          <Button variant="ghost" class="hover:text-white w-6 h-8">
            <PanelLeft class="h-5 w-5" />
          </Button>
        </SidebarGroupLabel>
        <SidebarGroupContent class="pt-2">
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton
                asChild
                class="hover:bg-[#101319] active:bg-[#101319] transition-colors duration-200"
              >
                <a :href="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
