<script setup>
import { computed } from 'vue'

import Icon from '@/components/elements/Ele_Icon.vue'
import Button from '@/components/elements/Ele_Button.vue'

const props = defineProps({
  size: String,
})

const className = computed(() => ({
  ' -small': props.size === 'small',
  ' -big': props.size === 'big',
}))
</script>

<template>
  <div class="email" :class="className">
    <input class="email__input" type="email" placeholder="Enter your email..." />
    <Icon v-if="size == 'small'" name="chevron" size="medium" bg="orange-blanc" />
    <Button v-if="size == 'big'" size="big" class="email__button">subcribe</Button>
  </div>
</template>

<style lang="scss" scoped>
.email {
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  background: $color-white;
  
  &.-small{
      padding: 8px 10px;
      border-radius: 32.5px;
      box-shadow: 0 0 15px rgba($color-gray, 30%);

      .email__input {
        @include p2;
        border: none;
        width: 200px;
    
        &:focus {
          outline: none;
        }
    
        &::placeholder {
          color: darken($color-gray, 50%);
        }
      }
  }

  &.-big{
    border: 2px solid black;
    height: 72px;
    padding: 11px;
    border-radius: 15px;

      .email__input {
        @include p1;
        margin: 25px 34px;
        width: 100%;
        border: none;
    
        &:focus {
          outline: none;
        }
    
        &::placeholder {
          color: darken($color-gray, 50%);
        }
      }

      .email__button{
        height: 100%;
        padding: 14px 26px;
        text-transform: uppercase;

      }
  }

}
</style>