import myGridCards from '@/components/myGirdCards.vue'

export default {
  title: 'components/myGridCards',
  component: myGridCards,
  argTypes: {
    typeGrid: {
      control: 'select',
      options: ['big', 'small']
    },
    gridCards: {
      control: 'object'
    }
  }
}

export const GridCardsBig = {
  render: (args) => {
    return {
      components: {
        myGridCards
      },
      setup() {
        return { args }
      },
      template: `<myGridCards v-bind="args"/>`
    }
  },
  args: {
    typeGrid: 'big',
    gridCards: [
      {
        type: 'produit-big',
        imgSrc: '/GyroSandwhic.jpg',
        imgAlt: 'Photo de Gyro Sandwhic',
        border: 'shadow',
        title: 'Gyro Sandwhic',
        prix: '15.00',
        note: '4.9'
      },
      {
        type: 'produit-big',
        imgSrc: '/Enchilade.jpg',
        imgAlt: 'Photo de Enchilade',
        border: 'shadow',
        title: 'Enchilade',
        prix: '25.50',
        note: '5.0'
      },
      {
        type: 'produit-big',
        imgSrc: '/GreenBeans.jpg',
        imgAlt: 'Photo de Green Beans',
        border: 'shadow',
        title: 'Green Beans',
        prix: '12.00',
        note: '4.9'
      },
      {
        type: 'produit-big',
        imgSrc: '/Pizza.jpg',
        imgAlt: 'Photo de Pizza',
        border: 'shadow',
        title: 'Pizza',
        prix: '18.50',
        note: '5.0'
      },
      {
        type: 'produit-big',
        imgSrc: '/ChickenPotPie.jpg',
        imgAlt: 'Photo de Chicken Pot Pie',
        border: 'shadow',
        title: 'Chicken Pot Pie',
        prix: '25.00',
        note: '4.9'
      },
      {
        type: 'produit-big',
        imgSrc: '/GreenSalad.jpg',
        imgAlt: 'Photo de Green Salad',
        border: 'shadow',
        title: 'Green Salad',
        prix: '15.00',
        note: '4.9'
      }
    ]
  }
}

export const GridCardsSmall = {
  ...GridCardsBig,
  args: {
    typeGrid: 'small',
    gridCards: [
      {
        type: 'produit-small',
        imgSrc: '/Burger.png',
        imgAlt: 'Photo de Burger',
        title: 'Burger',
        prix: '5.15',
        des: 'Mushroom Sauce'
      },
      {
        type: 'produit-small',
        imgSrc: '/FoodCombo.png',
        imgAlt: 'Photo de Food Combo',
        title: 'Food Combo',
        prix: '259.15',
        des: "Mushroom Sauce"
      },
      {
        type: 'produit-small',
        imgSrc: '/Pizza.png',
        imgAlt: 'Photo de Pizza',
        title: 'Pizza',
        prix: '6.15',
        des: "Mushroom Sauce"
      },
      {
        type: 'produit-small',
        imgSrc: '/Cake.png',
        imgAlt: 'Photo de Cake',
        title: 'Cake',
        prix: '5.15',
        des: "Mushroom Sauce"
      }
    ]
  }
}

export const GridCardsService = {
  ...GridCardsBig,
  args: {
    typeGrid: 'big',
    gridCards: [
      {
        type: 'service',
        border: 'border',
        icon: 'couvertsCroises',
        title: 'Qualityfull Food',
        des: `But I must explain to you how all this
              mistaken idea of denouncing pleasur and
              prasising pain was bron.`
      },
      {
        type: 'service',
        border: 'shadow',
        icon: 'couverts',
        title: 'Healthy Food',
        des: `But I must explain to you how all this
              mistaken idea of denouncing pleasur and
              prasising pain was bron.`
      },
      {
        type: 'service',
        border: 'border',
        icon: 'camion',
        title: 'Fast Delivery',
        des: `But I must explain to you how all this
              mistaken idea of denouncing pleasur and
              prasising pain was bron.`
      }
    
    ]
  }
}
