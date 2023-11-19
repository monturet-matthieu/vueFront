<script setup>

import Titles from '@/components/elements/Ele_Titles.vue'
import CarrouselCards from '@/components/Comp_CarrouselCards.vue'

</script>


<template>
  <section class="sectionAvis">
    <Titles h2="Testimonials" h3="Our Happy Client Says" />

    <div class="sectionAvis__content">
      <CarrouselCards />
      <img
        class="sectionAvis__img"
        src="/FritesBurgers.png"
        alt="photo illustrative d'un frite/burger"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sectionAvis {
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 45px;

    .sectionAvis__img {
      width: 45%;
      flex: none;
      display: none;
      @include x-large-up {
        display: block;
      }
    }
  }
}
</style>