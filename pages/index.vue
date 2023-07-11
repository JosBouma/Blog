<script lang="ts" setup>
import { Content } from "@prismicio/client"
import { components } from "~/slices"
const { client } = usePrismic()
const { data: doc } = await useAsyncData<Content.IndexDocument>('index', () => client.getSingle('index'))
</script>

<template>
  <layout-main>
    <global-container>
      <h1>{{ doc?.data.title }}</h1>
      <prismic-rich-text :field="doc?.data.intro" />
      <SliceZone wrapper="main" class="two-columns-parent" :slices="doc?.data.slices ?? []" :components="components" />
    </global-container>
  </layout-main>
</template>
