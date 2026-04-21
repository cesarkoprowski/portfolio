<template>
  <aside
    :class="[
      'fixed left-[2vh] top-1/2 -translate-y-1/2 z-50 h-[96vh] rounded-2xl p-1 transition-all duration-300',
      'bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg',
      isOpen ? 'w-[250px]' : 'w-[65px]',
    ]"
  >
    <div class="flex flex-col h-full">
      <div class="pr-[9px] my-4 flex justify-end">
        <Button
          size="icon"
          variant="ghost"
          :class="[
            'text-white cursor-pointer transition-all duration-300 hover:bg-transparent border-none bg-transparent',
            isOpen ? 'bg-cover bg-center bg-no-repeat rounded-md w-32 h-8' : 'w-8 h-8',
          ]"
          :style="isOpen ? { backgroundImage: 'url(/logo.png)' } : undefined"
          @click="isOpen = !isOpen"
        >
          <img
            v-if="!isOpen"
            src="/simple_logo.png"
            alt="Logo"
            class="w-6 h-6 object-contain"
            draggable="false"
          />
        </Button>
      </div>

      <nav class="flex flex-col gap-2 text-white font-medium">
        <RouterLink
          v-for="item in items"
          :key="item.href"
          :to="item.href"
          :class="[
            'flex items-center rounded-lg text-base transition-colors hover:bg-white/4 h-14',
            route.path === item.href ? 'bg-white/5' : '',
          ]"
        >
          <div class="w-[54px] flex justify-center items-center">
            <component :is="item.icon" :size="20" />
          </div>
          <span
            :class="[
              'overflow-hidden whitespace-nowrap transition-all duration-300',
              isOpen ? 'max-w-full opacity-100' : 'ml-0 max-w-0 opacity-0',
            ]"
          >
            {{ item.label }}
          </span>
        </RouterLink>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Flag, FolderGit2, House, Sparkles } from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";

const route = useRoute();
const isOpen = ref(false);

const items = [
  { label: "Home", href: "/", icon: House },
  { label: "Skills", href: "/skills", icon: Sparkles },
  { label: "Projects", href: "/projects", icon: FolderGit2 },
  { label: "Highlights", href: "/highlights", icon: Flag },
];

onMounted(() => {
  const savedState = localStorage.getItem("sidebar-open") === "true";
  isOpen.value = savedState;
});

watch(isOpen, (value) => {
  localStorage.setItem("sidebar-open", String(value));
});
</script>
