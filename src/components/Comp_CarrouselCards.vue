<script setup>

import Avis from '@/components/Comp_Avis.vue'
import Icon from '@/components/elements/Ele_Icon.vue'

</script>


<template>
  <div class="carrouselCards">
    <div class="iconFleche iconFleche-gauche">
      <Icon name="fleche" size="medium" direction="gauche" bg="orange-blanc" />
    </div>
    <div class="iconFleche iconFleche-droit">
      <Icon name="fleche" size="medium" bg="orange-blanc" />
    </div>

    <div class="carrouselCards__carrousel">
      <Avis />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carrouselCards {
  position: relative;
  width: 730px;

  .iconFleche {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    &-droit {
      right: 0;
      transform: translateX(50%);
    }

    &-gauche {
      left: 0;
      transform: translateX(-50%);
    }
  }
}
</style>

