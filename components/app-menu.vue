<script lang="ts" setup>
// import { Content } from "@prismicio/client"
const { client } = usePrismic()
</script>

<style>
#app-menu {
  position: sticky;
}

#app-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app-menu > ul {
  position: sticky;
  padding: 1rem;
  top: 0;
  display: grid;
  gap: 1rem;
}

#app-menu a {
  color: var(--color-primary);
}
</style>

<template>
  <nav id="app-menu">
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/portfolio/">Portfolio</nuxt-link>
      </li>
    </ul>
  </nav>
</template>