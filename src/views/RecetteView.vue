<template>
  <div class="about">
    <RouterLink to="/">Accueil</RouterLink>
    <h1>Id Recette : {{ recette.value }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { API } from '@/utils/axios.js'

const route = useRoute()
const recette = ref([])

const getRecette = async () => {
  const response = await API.get(`/recette/${route.params.id}`)
  return response.data
}

onMounted(async () => {
  recette.value = await getRecette()
})

</script>
