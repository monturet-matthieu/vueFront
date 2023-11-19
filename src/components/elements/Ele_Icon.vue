<script setup>
import { computed } from 'vue'

import Arrow from "../icons/Icon_arrow.vue"
import Bag from "../icons/Icon_bag.vue"
import Camion from "../icons/Icon_camion.vue"
import Chevron from "../icons/Icon_chevron.vue"
import Croix from "../icons/Icon_croix.vue"
import Etoile from "../icons/Icon_etoile.vue"
import Facebook from "../icons/Icon_facebook.vue"
import Fork from "../icons/Icon_fork.vue"
import Heure from "../icons/Icon_heure.vue"
import Instagram from "../icons/Icon_instagram.vue"
import Linkedin from "../icons/Icon_linkedin.vue"
import Loupe from "../icons/Icon_loupe.vue"
import Phone from "../icons/Icon_phone.vue"
import Ping from "../icons/Icon_ping.vue"
import Play from "../icons/Icon_play.vue"
import Twitter from "../icons/Icon_twitter.vue"

const props = defineProps({
  name: String,
  direction: String,
  size: String,
  bg: String,
  shadow: String,
  etoile: String
})

const getIcon = computed(() => {
  switch (props.name) {
  case 'camion':
    return Camion
  case 'chevron':
    return Chevron
  case 'couverts':
    return Fork
  case 'couvertsCroises':
    return Croix
  case 'etoile':
    return Etoile
  case 'facebook':
    return Facebook
  case 'fleche':
    return Arrow
  case 'heure':
    return Heure
  case 'instagram':
    return Instagram
  case 'linkedin':
    return Linkedin
  case 'loupe':
    return Loupe
  case 'phone':
    return Phone
  case 'ping':
    return Ping
  case 'play':
    return Play
  case 'sac':
    return Bag
  case 'twitter':
    return Twitter
  default:
    return Twitter
  }
})

const className = computed(() => ({
  ' -direction-gauche': props.direction === 'gauche',

  ' -size -small': props.size === 'small',
  ' -size -medium': props.size === 'medium',
  ' -size -big': props.size === 'big',

  ' -bg -black': props.bg === 'black',
  ' -bg -white': props.bg === 'white',
  ' -bg -orange': props.bg === 'orange',
  ' -bg -orange-blanc': props.bg === 'orange-blanc',
  ' -bg -blanc-orange': props.bg === 'blanc-orange',

  ' -shadow': props.shadow === 'true',

  ' -etoile -pleine': props.etoile === 'pleine',
  ' -etoile -vide': props.etoile === 'vide',
  ' -etoile -none': props.etoile === 'none'
}))
</script>

<template>
  <i class="icon" :class="className">
    <component :is="getIcon"/>
  </i>
</template>
  
<style lang="scss" scoped>
.icon{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    stroke: $color-black;
    fill: $color-black;

    &.-direction-gauche{
        transform: rotate(180deg);
    }

    &.-size{

        &.-small{
            height: 20px;
            width: 20px;
        }
    
        &.-medium{
            height: 42px;
            width: 42px;
            padding: 10px;
        }
    
        &.-big{
            height: 98px;
            width: 98px;
            padding: 23px;
        }
    }


    &.-bg{
        &.-black{
            background-color: $color-black;
            stroke: $color-white;
            fill: $color-white;
        }
        
        &.-white{
            background-color: $color-white;
        }
        
        &.-orange{
            background-color: $color-main_light;
            stroke: $color-main;
            fill: $color-main;
        }
        
        &.-orange-blanc{
            background-color: $color-main;
            stroke: $color-white;
            fill: $color-white;
        }
        
        &.-blanc-orange{
            background-color: $color-white;
            stroke: $color-main;
            fill: $color-main;
        }
    }

    &.-shadow{
        box-shadow: 0 0 10px $color-gray;
    }

    &.-etoile{
        
        &.-vide{
            stroke: $color-black;
            fill: none;
        }
        
        &.-pleine{
            stroke: $color-main;
            fill: $color-main;
        }
    }
}
</style>