<template>
  <body class="mainbody">
    <LayHero />

    <CardInfos />

    <section class="sectionGrid">
      <Titles h2="Product" h3="Most Popular Items" />

      <CardsGrid typeGrid="big" :gridCards="GridProducts" />

      <div class="buttonCenter">
        <Button @click="moreCard()" variant="rounded" icon="true" v-if="recettes">See more product</Button>
      </div>
    </section>

    <section class="sectionGrid">
      <Titles h2="Services" h3="Why Choose Our Favorite Food" />

      <CardsGrid typeGrid="big" :gridCards="gridServices" />
    </section>

    <LayAvis />

    <LayEmail />
  </body>
</template>

<style lang="scss" scoped>
.sectionGrid {
  > * {
    margin: rem(57) 0;
  }

  .buttonCenter {
    width: fit-content;
    margin: auto;
  }
}
</style>

<script setup>
import { computed, ref } from 'vue'

import LayHero from '@/components/layouts/Lay_Hero.vue'
import CardInfos from '@/components/Comp_CardInfos.vue'
import LayEmail from '@/components/layouts/Lay_Email.vue'
import LayAvis from '@/components/layouts/Lay_Avis.vue'

import Titles from '@/components/elements/Ele_Titles.vue'
import CardsGrid from '@/components/Comp_CardsGrid.vue'
import Button from '@/components/elements/Ele_Button.vue'

const gridPage = ref(1)

const moreCard = () =>{
  gridPage.value++
}

const GridProducts = computed(() => {
  return GridProductsBig.slice(0, 0+3*gridPage.value)
})

const recettes = computed(() => {
  return GridProducts.value.length < GridProductsBig.length
})

const GridProductsBig = [
  {
    type: 'produit-big',
    imgSrc: '/GyroSandwhic.jpg',
    imgAlt: 'Photo de Gyro Sandwitc',
    title: 'Gyro Sandwhic',
    prix: '15.00',
    note: '4.9',
    lien: "gyro-sandwhic"
  },
  {
    type: 'produit-big',
    imgSrc: '/Enchilade.jpg',
    imgAlt: 'Photo de Enchilade',
    title: 'Enchilade',
    prix: '25.50',
    note: '5.0',
    lien: "enchilade"

  },
  {
    type: 'produit-big',
    imgSrc: '/GreenBeans.jpg',
    imgAlt: 'Photo de Green Beans',
    title: 'Green Beans',
    prix: '12.00',
    note: '4.9',
    lien: "green-beans"

  },
  {
    type: 'produit-big',
    imgSrc: '/Pizza.jpg',
    imgAlt: 'Photo de Pizza',
    title: 'Pizza',
    prix: '18.50',
    note: '5.0',
    lien: "pizza"

  },
  {
    type: 'produit-big',
    imgSrc: '/ChickenPotPie.jpg',
    imgAlt: 'Photo de Chicken Pot Pie',
    title: 'Chicken Pot Pie',
    prix: '25.00',
    note: '4.9',
    lien: "chicken-pot-pie"

  },
  {
    type: 'produit-big',
    imgSrc: '/GreenSalad.jpg',
    imgAlt: 'Photo de Green Salad',
    title: 'Green Salad',
    prix: '15.00',
    note: '4.9',
    lien: "green-salad"

  }
]

const gridServices = [
  {
    type: 'service',
    icon: 'couvertsCroises',
    title: 'Qualityfull Food',
    des: `But I must explain to you how all this
          mistaken idea.`
  },
  {
    type: 'service',
    icon: 'couverts',
    title: 'Healthy Food',
    des: `But I must explain to you how all this
          mistaken idea of denouncing pleasur and
          prasising pain was bron.`
  },
  {
    type: 'service',
    icon: 'camion',
    title: 'Fast Delivery',
    des: `But I must explain to you how all this
          mistaken idea of denouncing pleasur and
          prasising pain was bron.`
  }
]
</script>
