<script setup>
import Logo from '@/components/elements/Ele_Logo.vue'
import Icon from '@/components/elements/Ele_Icon.vue'
import Email from '@/components/elements/Ele_Email.vue'

defineProps({
  title: String,
  logo: String,
  liens: Array,
  texte: String,
  icons: Array,
  email: String
})
</script>

<template>
  <div class="footer__menu">
    <Logo v-if="logo" class="footer__menu__logo"/>

    <h4 v-if="title" class="footer__menu__title">{{ title }}</h4>

    <nav v-if="liens" class="footer__nav">
      <ul class="footer__list">
        <li class="footer__item" v-for="lien in liens" :key="lien">
          <a v-if="lien.href" :href="lien.href"> {{ lien.txt }} </a>
          <p v-else>{{ lien.txt }}</p>
        </li>
      </ul>
    </nav>

    <p v-if="texte" class="footer__texte">{{ texte }}</p>

    <div v-if="icons" class="footer__icons">
      <Icon v-for="icon in icons" :key="icon" :name="icon" size="medium" bg="orange" />
    </div>

    <Email v-if="email" :size="email" class="footer__email"/>
  </div>
</template>

<style lang="scss" scoped>
.footer__menu {
  width: fit-content;
  max-width: 380px;
  height: fit-content;
  //   border: red solid 2px;

  &__logo {
    width: 180px;
    margin-bottom: 30px;
  }

  &__title {
    margin-bottom: 68px;
  }

  .footer__nav,
  .footer__texte {
    @include p1;
    color: darken($color_gray, 20%);
  }

  .footer__nav {
    line-height: 1.75;
  }

  .footer__icons {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin: 20px 0;
  }

  .footer__email{
    margin-top: 30px;
  }
}
</style>