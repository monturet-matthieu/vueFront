<script setup>

import Icon from '@/components/elements/Ele_Icon.vue'

</script>

<template>
  <section class="cardsInfo">
    <div class="cardsInfo__card">
      <Icon name="heure" size="medium" bg="orange-blanc"/>
      <h5>Today 10:00am - 10:00pm</h5>
      <p>Working time</p>
    </div>

    <span class="cardsInfo__separateur"></span>

    <div class="cardsInfo__card">
      <Icon name="ping" size="medium" bg="orange-blanc"/>
      <h5>Washington, D.C., DC,USA</h5>
      <p>Our Location</p>
    </div>

    <span class="cardsInfo__separateur"></span>

    <div class="cardsInfo__card">
      <Icon name="phone" size="medium" bg="orange-blanc"/>
      <h5>+0123 456 7891</h5>
      <p>Phone Number</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.cardsInfo{
    display: flex;
    align-items: center;
    width: 100%;
    max-width: rem(1600);
    height: min-content;
    border-radius: rem(50);
    box-shadow: 0 0 rem(50) 0 rgba($color-gray, 20%);
    
    &__card{
        flex: 1 1 0%;
        padding: rem(60);
        text-align: center;

        h5{
            margin: rem(12) 0 rem(6) 0;
        }

        p{
            @include p2
        }

    }

    &__separateur{
        flex: none;
        width: rem(1.5);
        height: rem(160);
        background: $color-gray;
    }
}

</style>