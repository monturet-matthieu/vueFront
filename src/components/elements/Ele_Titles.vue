<script setup>

defineProps({
  h2: String,
  h3: String
})

</script>

<template>
  <div class="title">
    <h2>{{ h2 }}</h2>
    <h3>{{ h3 }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
  line-height: 1.5;
  margin-bottom: 57px;

  h2 {
    @include p2;
    color: $color-main;
  }
}
</style>