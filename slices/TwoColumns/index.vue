<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TwoColumnsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<style>
.two-columns-parent {
  display: grid;
  margin: 3rem 0;
  gap: 6rem;
}

.slice__two-column {
  --img-col: minmax(200px, 0.5fr);
  display: grid;
  gap: 3rem;
}

.slice__two-column.default {
  grid-template-columns: var(--img-col) 1fr;
}

.slice__two-column.alternative {
  grid-template-columns: 1fr var(--img-col);
}

.slice__two-column .first,
.slice__two-column .second {
  grid-row: 1;
}

.slice__two-column.alternative .first {
  grid-column: 2;
}

.slice__two-column.alternative .second {
  grid-column: 1;
}

.slice__two-column > div > img {
  filter: drop-shadow(16px 16px 20px rgb(221, 221, 221));
}

@media screen and (max-width: 60rem) {
  .slice__two-column.default,
  .slice__two-column.alternative {
    display: flex;
    flex-direction: column;
  }
}
</style>

<template>
  <section class="slice__two-column" :class="slice.variation">
    <div class="first">
      <img-x :field="slice.primary.image" />
    </div>
    <div class="second">
      <h2>{{ slice.primary.header }}</h2>
      <prismic-rich-text :field="slice.primary.content" />
    </div>
  </section>
</template>
