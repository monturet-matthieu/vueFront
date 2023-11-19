import myCard from '@/components/myCard.vue'

export default {
  title: 'components/myCard',
  component: myCard,
  argTypes: {
    type: {
      control: 'select',
      options: ['service', 'produit-big', 'produit-small']
    },
    title: {
      control: 'text'
    },

    imgSrc: {
      control: 'text',
      table: {
        category: 'Produit'
      }
    },
    imgAlt: {
      control: 'text',
      table: {
        category: 'Produit'
      }
    },
    prix: {
      control: 'text',
      table: {
        category: 'Produit'
      }
    },

    note: {
      control: 'text',
      table: {
        category: 'Produit Big'
      }
    },

    icon: {
      control: 'select',
      options: ['couverts', 'couvertsCroises', 'camion'],
      table: {
        category: 'Service'
      }
    }
  }
}

export const ProduitBigCard = {
  render: (args) => {
    return {
      components: {
        myCard
      },
      setup() {
        return { args }
      },
      template: `<myCard v-bind="args"/>`
    }
  },
  args: {
    type: 'produit-big',
    imgSrc: 'https://placewaifu.com/image/500',
    imgAlt: 'mon image',
    title: 'Green Beans',
    note: '4.9',
    prix: '15.00'
  }
}

export const ProduitSmallCard = {
  render: (args) => {
    return {
      components: {
        myCard
      },
      setup() {
        return { args }
      },
      template: `<myCard v-bind="args">Mushroom Sauce</myCard>`
    }
  },
  args: {
    type: 'produit-small',
    imgSrc: 'https://placewaifu.com/image/300',
    imgAlt: 'mon image',
    title: 'Burger',
    prix: '5.15'
  }
}

export const ServiceCard = {
  render: (args) => {
    return {
      components: {
        myCard
      },
      setup() {
        return { args }
      },
      template: `<myCard v-bind="args">But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.</myCard>`
    }
  },
  args: {
    type: 'service',
    icon: 'couverts',
    title: 'Healthy Food'
  }
}
