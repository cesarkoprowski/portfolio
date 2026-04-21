<template>
  <PageWrapper background="/homepage_bg.png">
    <div class="flex flex-col sm:flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto max-h-100 text-center md:text-left">
      <div class="w-full md:w-auto lg:pl-3">
        <h1 class="flex flex-row items-center justify-center md:justify-start text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
          <span class="text-white pr-2">I'm</span>
          <span
            class="font-medium bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500 bg-clip-text text-transparent bg-[size:400%_auto] animate-text-gradient"
          >
            Cesar Koprowski
          </span>
          <span class="text-white">.</span>
        </h1>
        <h2 class="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-4">
          A Full-Stack Developer
        </h2>
        <div class="pt-5 px-4 md:px-0 md:pr-4">
          <span class="text-white text-base lg:text-lg">
            A developer driven by a passion for solving complex problems. My
            background in Systems Analysis allows me to bridge the gap between
            technical requirements and intuitive user experiences.
          </span>
        </div>

        <div class="pt-5">
          <Button
            tag="a"
            href="/cv-en.pdf"
            download="cv-en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="w-30 h-10 text-white text-lg cursor-pointer font-medium rounded-md transition-all duration-500 ease-in-out bg-gradient-to-r from-emerald-500 to-cyan-500 bg-[length:200%_auto] hover:bg-[position:right_center]"
          >
            Resume
          </Button>
        </div>
      </div>

      <div class="mt-8 md:mt-0">
        <img
          src="/picture.png"
          alt="My Picture"
          class="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-contain [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
          draggable="false"
        />
      </div>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from "@/shared/components/layout/PageWrapper.vue";
import { Button } from "@/shared/components/ui/button";
</script>
