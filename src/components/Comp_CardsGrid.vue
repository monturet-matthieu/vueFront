<script setup>
import { computed } from 'vue'
import Card from '@/components/Comp_Card.vue'

const props = defineProps({
  typeGrid: String,
  gridCards: Object
})

const className = computed(() => ({
  ' -big': props.typeGrid === 'big',
  ' -small': props.typeGrid === 'small'
}))
</script>

<template>
  <div class="grid" :class="className">
    <Card
      v-for="cardData in gridCards"
      :key="cardData"
      v-bind="cardData"
      :type="cardData.type"
    />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  justify-items: center;
  align-items: stretch;
  grid-template-rows: 1fr;

  &.-big {
    grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
    gap: rem(50);
  }

  &.-small {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: rem(50) rem(10);
  }
}
</style>


