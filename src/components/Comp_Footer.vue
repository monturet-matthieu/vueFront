<script setup>
import FooterMenu from "@/components/elements/Ele_FooterMenu.vue"

const menuFooter = [
  {
    logo: true,
    texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.",
    icons: ["facebook", "twitter", "linkedin", "instagram"]
  },
  {
    title:"Opening Restaurant",
    liens:[
      {txt: "Sat-Wet: 09:00am-10:00PM", href: ""},
      {txt: "Thursdayt: 09:00am-11:00PM", href: ""},
      {txt: "Friday: 09:00am-8:00PM", href: ""}
    ]
  },
  {
    title:"User Link",
    liens:[
      {txt: "About Us", href: "#"},
      {txt: "Contact Us", href: "#"},
      {txt: "Order Delivery", href: "#"},
      {txt: "Payment & Tex", href: "#"},
      {txt: "Terms of Services", href: "#"}
    ]
  },
  {
    title:"Contact Us",
    liens:[
      {txt: "1234 Country Club Ave", href: ""},
      {txt: "NC 123456, London, UK", href: ""},
      {txt: "+0123 456 7891", href: ""}
    ],
    email: "small"
  },
]
</script>


<template>
  <footer class="footer">
    <FooterMenu v-for="menu in menuFooter" :key="menu" v-bind="menu"/>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100vw;
  height: fit-content;
  padding: rem(57) 0;
  gap: rem(20);
  background: rgba($color-gray, 10%);
}
</style>