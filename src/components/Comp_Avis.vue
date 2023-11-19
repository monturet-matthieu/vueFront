<template>
  <div class="cardAvis">
    <div class="cardAvis__personne">
      <img class="cardAvis__pp" src="/WilliansJhone.jpg" alt="" />
      <div class="cardAvis__desc">
        <h5>Willians Jhone</h5>
        <p>CEO & Co-Founder</p>
      </div>
    </div>

    <p class="cardAvis__avis">
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing
      dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant
      feugiat neque ultrices nunc, dolor egestas mus.”
    </p>
  </div>
</template>

<style lang="scss" scoped>
.cardAvis {
  display: grid;
  place-items: center;
  gap: rem(45);
  max-width: rem(730);
  min-width: rem(500);
  padding: rem(100) rem(20);
  aspect-ratio: 2/1;
  box-shadow: 0 0 rem(30) 0 rgba($color-gray, 30%);
  border-radius: rem(35);

  &__personne {
    display: flex;
    align-items: center;
    gap: rem(17);
    margin: auto;
    width: fit-content;

    img {
      width: rem(76);
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 100%;
    }

    .cardAvis__desc {
      > * {
        margin: rem(5) 0;
      }

      p {
        @include p2;
      }
    }
  }

  &__avis {
    width: 85%;
    margin: auto;
    text-align: center;
  }
}
</style>