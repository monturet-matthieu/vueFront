<script setup>
import { computed } from 'vue'

import GridCards from '@/components/Comp_CardsGrid.vue'
import Button from '@/components/elements/Ele_Button.vue'
import Icon from '@/components/elements/Ele_Icon.vue'

const gridProduitsSmall = computed(() => {
  return gridProduits.slice(0, 4)
})

const gridProduits = [
  {
    type: 'produit-small',
    imgSrc: '/Burger.png',
    imgAlt: "Photo d'un Burger",
    title: 'Burger',
    prix: '5.15',
    des: 'Mushroom Sauce'
  },
  {
    type: 'produit-small',
    imgSrc: '/FoodCombo.png',
    imgAlt: 'Photo de Food Combo',
    title: 'Food Combo',
    prix: '9.15',
    des: 'Mushroom Sauce'
  },
  {
    type: 'produit-small',
    imgSrc: '/Pizza.png',
    imgAlt: 'Photo de Pizza',
    title: 'Pizza',
    prix: '6.15',
    des: 'Mushroom Sauce'
  },
  {
    type: 'produit-small',
    imgSrc: '/Cake.png',
    imgAlt: 'Photo de Cake',
    title: 'Cake',
    prix: '5.15',
    des: 'Mushroom Sauce'
  }
]
</script>

<template>
  <section class="sectionHero">
    <div class="sectionHero__gauche">
      <div class="sectionHero__gauche-delivery">
        <p>Bike Delivery</p>
        <img src="/BikeDelivery.jpg" alt="illustration de livraison" />
      </div>

      <h1 class="sectionHero__gauche-title">
        The Fastest Delivery <br />
        In <span>Your City</span>
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a
        vestibulum enim volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum.
      </p>

      <div class="sectionHero__gauche-buttons">
        <Button>order now</Button>

        <div class="button-play">
          <Icon name="play" size="big" bg="blanc-orange" shadow="true" />
          <p>Order Process</p>
        </div>
      </div>
    </div>

    <div class="sectionHero__droit">
      <div class="sectionHero__droit-bg"></div>

      <div class="sectionHero__droit-grid">
        <GridCards typeGrid="small" :gridCards="gridProduitsSmall" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sectionHero {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 50px;

  &__gauche {
    min-width: min-content;
    max-width: 630px;
    width: 48%;

    &-delivery {
      width: 270px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      padding: 5px;
      border-radius: 30px;
      background: $color-main_light;

      img {
        width: 54px;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: 100%;
      }

      p {
        @include h5;
        color: $color-main;
        margin-left: 25px;
      }
    }

    &-title {
      margin: 70px 0 50px 0;

      span {
        color: $color-main;
      }
    }

    &-buttons {
      margin-top: 90px;
      display: flex;
      gap: 50px;

      .button-play {
        flex: none;
        display: flex;
        align-items: center;
        gap: 25px;

        p {
          @include h4;
        }
      }
    }
  }

  &__droit {
    position: relative;
    min-width: min-content;
    max-width: 600px;
    width: 40%;
    height: fit-content;
    padding: 50px 40px 60px 0;

    &-bg {
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(25deg, transparent, rgba($color-gray, 50%));
      border-radius: 30px;
      width: 77%;
      height: 100%;
    }
  }
}
</style>