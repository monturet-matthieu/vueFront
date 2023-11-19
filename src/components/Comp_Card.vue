<script setup>
import { computed } from 'vue'

import Icon from '@/components/elements/Ele_Icon.vue'
import Button from '@/components/elements/Ele_Button.vue'

const props = defineProps({
  type: String,
  title: String,

  imgSrc: String,
  imgAlt: String,

  prix: String,
  note: String,

  icon: String,
  des: String,

  lien: String

})

const className = computed(() => ({
  ' -produit-big': props.type === 'produit-big',
  ' -produit-small': props.type === 'produit-small',
  ' -service': props.type === 'service'
}))
</script>

<template>
  <div v-if="type === 'produit-big'" class="card" :class="className">
    <div class="card__img">
      <img :src="imgSrc" :alt="imgAlt" />
    </div>

    <div class="card__content">
      <div class="card__content-left">
        <div class="card__title">
          <h4>{{ title }}</h4>
        </div>

        <div class="card__button">
          <RouterLink :to="`/recette/${lien}`">
            <Button variant="rounded" size="small">add to Cart</Button>
          </RouterLink>
        </div>
      </div>

      <div class="card__content-right">
        <div class="card__note">
          <Icon name="etoile" etoile="pleine" size="small" />
          <p>{{ note }}</p>
        </div>

        <div class="card__prix">
          <p>{{ prix }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-if="type === 'produit-small'" class="card" :class="className">
    <div class="card__bg">
      <div class="card__content">
        <h4>{{ title }}</h4>

        <p v-if="des" class="card__content__desc">{{ des }}</p>
        <p v-else class="card__content__desc"><slot /></p>

        <p class="card__content__prix">{{ prix }}</p>
      </div>

      <div class="card__buttons">
        <Icon name="fleche" size="medium" bg="black" />
        <Icon name="fleche" size="medium" bg="white" direction="gauche" />
      </div>
    </div>

    <div class="card__img">
      <img :src="imgSrc" :alt="imgAlt" />
    </div>
  </div>

  <div v-if="type === 'service'" class="card" :class="className">
    <div class="card-service__content">
      <Icon :name="icon" size="big" bg="orange" />
      <h4>{{ title }}</h4>

      <p v-if="des">{{ des }}</p>
      <p v-else><slot /></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.card {
  &.-produit-big {
    max-width: rem(500);
    min-width: rem(335);
    aspect-ratio: 1/1;
    border-radius: rem(35);
    background: $color-white;
    overflow: hidden;
    box-shadow: 0 rem(2) rem(30) rgba($color-gray, 40%);

    .card__img {
      width: 100%;
      height: 65%;
      object-fit: contain;
      overflow: hidden;

      img {
        transition: all ease-in-out 0.5s;
      }
    }

    &:hover .card__img img {
      transform: scale(1.1);
    }

    .card__content {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin: rem(25) rem(32);

      &-gauche {
        > :nth-child(n) {
          margin-top: rem(16);
        }
      }

      &-droit {
        text-align: right;

        > :nth-child(n) {
          margin-top: rem(25);
        }

        .card__note {
          @include p2;
          display: flex;
          justify-content: right;
          align-items: center;
          gap: rem(10);
        }
      }
    }
  }

  &.-produit-small {
    position: relative;
    max-width: rem(300);
    min-width: rem(200);
    aspect-ratio: 2/3;
    z-index: 0;

    .card__bg {
      position: absolute;
      z-index: 0;
      bottom: 0;
      display: grid;
      place-items: end;
      width: 100%;
      height: 80%;
      background: $color-white;
      border-radius: rem(30);
      box-shadow: 0 0 rem(20) 0 rgba($color-gray, 50%);
    }

    .card__img {
      width: 90%;
      margin: auto;
      object-fit: contain;
      overflow: hidden;
      filter: drop-shadow(0 rem(8) rem(8) $color-gray);
    }

    .card__content {
      text-align: center;
      margin: 15% auto;

      > * + * {
        margin: rem(11);
      }

      .card__content__desc {
        z-index: 10;
        @include p1;
      }

      .card__content__prix {
        z-index: 10;
        @include h5;

        &::before {
          content: '$ ';
          color: #d92f26;
        }
      }
    }

    .card__buttons {
      position: absolute;
      bottom: -20px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15%;

      > * {
        cursor: pointer;
      }
    }
  }

  &.-service {
    display: grid;
    place-items: center;
    max-width: rem(500);
    min-width: rem(335);
    min-height: fit-content;
    padding: rem(52);
    background: $color-white;
    border-radius: rem(35);
    overflow: hidden;
    text-align: center;
    border: 1px solid $color-gray;
    transition: all 0.5s ease-in-out;

    &:hover {
      border: transparent 1px solid;
      box-shadow: 0 rem(2) rem(30) rgba($color-gray, 60%);
    }

    :nth-child(n) {
      margin: rem(21) auto;
    }
  }
}
</style>