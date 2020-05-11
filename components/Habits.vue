<template>
  <div class="habits__container">
    <h2 class="habits__title">Истории неизлечимых привычек</h2>
    <div class="habits__cards">
      <slot></slot>
    </div>
    <button class=" btn habits__showmore">Больше статей</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.habits__container {
  display: flex;
  flex-direction: column;
}
.habits__title {
  font-weight: 600;
}
.habits__showmore {
  background-color: #fbfbfb;
  color: #000000;
  outline: none;
  border: none;
}
.habits__cards {
  display: grid;
}
@media screen and (min-width: 768px) {
  .habits__container {
    margin: 80px 40px 80px 40px;
  }
  .habits__title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
  }
  .habits__showmore {
    height: 50px;
    margin-top: 40px;
    font-size: 13px;
    line-height: 20px;
  }
  .habits__cards {
    grid-template-rows: repeat(3, 322px);
    grid-template-columns: repeat(3, 216px);
    grid-row-gap: 40px;
    grid-column-gap: 20px;
  }
}
@media screen and (min-width: 1024px) {
  .habits__container {
    margin: 80px 50px 80px 50px;
  }
  .habits__title {
    margin-bottom: 46px;
    margin-left: 0;
  }
  .habits__showmore {
    margin-top: 46px;
  }
  .habits__cards {
    grid-template-rows: repeat(2, 305px);
    grid-template-columns: repeat(4, 208px);
    grid-row-gap: 46px;
    grid-column-gap: 30px;
  }
}
@media screen and (min-width: 1280px) {
  .habits__container {
    margin: 90px 50px 90px 50px;
  }
  .habits__title {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 60px;
  }
  .habits__showmore {
    margin-top: 60px;
    height: 78px;
    font-size: 16px;
  }
  .habits__cards {
    grid-template-rows: repeat(2, 357px);
    grid-template-columns: repeat(4, 265px);
    grid-row-gap: 60px;
    grid-column-gap: 40px;
  }
}
@media screen and (min-width: 1440px) {
  .habits__container {
    margin: 100px 60px 100px 60px;
  }
  .habits__title {
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 70px;
  }
  .habits__showmore {
    height: 82px;
    margin-top: 70px;
  }
  .habits__cards {
    grid-template-rows: repeat(2, 392px);
    grid-template-columns: repeat(4, 300px);
    grid-row-gap: 70px;
    grid-column-gap: 40px;
  }
}
</style>
