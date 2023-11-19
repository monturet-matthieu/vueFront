<script setup>

import Logo from '@/components/elements/Ele_Logo.vue'
import Menu from '@/components/elements/Ele_Menu.vue'
import Search from '@/components/elements/Ele_Search.vue'

</script>

<template>
  <header class="header">
    <div class="header__content">
      <Logo class="header__content__logo" />
      <Menu />
      <Search />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  z-index: 50;
  position: sticky;
  display: block;
  top: 0;
  width: 100vw;
  margin-top: rem(15);
  background: $color-white;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 85vw;
    margin: auto;
    padding: rem(15) 0;

    &__logo {
      display: block;
      width: rem(100);
    }
  }
}
</style>