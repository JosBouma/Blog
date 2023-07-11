<style>
#layout-main {
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr 8fr;
  background: var(--color-supplement);
}

#layout-main .content {
  padding: 1rem;
}

@media screen and (max-width: 30rem) {
  #layout-main {
    display: flex;
    flex-direction: column;
  }
}
</style>

<template>
  <div id="layout-main">
    <app-menu />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>