<script setup>

import Email from '@/components/elements/Ele_Email.vue'

</script>


<template>
  <section class="sectionEmail">
    <img src="/Burger.png" alt="Photo d'un Burger" />

    <div class="sectionEmail__content">
      <h3>Subcribe To Our Newsletter</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna
        venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.
      </p>

      <Email size="big" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sectionEmail {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 74px 50px;
  width: 100%;
  height: 300px;
  border-radius: 50px;
  background-color: $color-black;

  img {
    display: none;
    flex: none;
    width: 38%;
    @include x-large-up {
      display: block;
    }
  }

  &__content {
    flex: none;
    color: $color-white;
    max-width: fit-content;

    @include x-large-up {
      max-width: 46%;
    }

    > * {
      margin: 15px 0;
    }
  }
}
</style>