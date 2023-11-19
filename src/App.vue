<script setup>
import { RouterView } from 'vue-router'

import Compo_Header from "./components/Comp_Header.vue"
import Compo_Footer from "./components/Comp_Footer.vue"
</script>

<template>
  <Compo_Header/>
  <RouterView />
  <Compo_Footer/>
</template>