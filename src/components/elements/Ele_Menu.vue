<script setup>

const liens = [["home", "#"],
  ["menu", "#"],
  ["service", "#"],
  ["shop", "#"]] 

</script>

<template>
  <div class="header__menu">
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item" v-for="lien in liens" :key="lien"><a :href="lien[1]">{{ lien[0] }}</a></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header__list{
    @include h5;
    display: flex;
    align-self: center;
    justify-content: center;
    gap: 30%;
    text-transform: capitalize;
}
</style>