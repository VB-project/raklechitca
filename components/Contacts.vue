<template>
  <div class="contacts__container">
    <span class="contacts__social">
      Мы в
      <a href="https://www.instagram.com/raklechitsa/" class="contacts__link"
        >Инстаграмме</a
      >
      и
      <a
        href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
        class="contacts__link"
        >Youtube</a
      >
    </span>

    <span class="contacts__share">Поделитесь &#8599;</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contacts__container {
  display: flex;
  flex-direction: column;
}
.contacts__link {
  text-decoration: none;
  color: #000000;
}
.contacts__link:hover {
  opacity: 0.8;
}
@media screen and (min-width: 768px) {
  .contacts__share {
    margin-top: 14px;
    font-size: 16px;
    line-height: 24px;
  }
  .contacts__link {
    font-size: 16px;
    line-height: 24px;
  }
}
@media screen and (min-width: 1024px) {
  .contacts__share {
    margin-top: 30px;
  }
}
@media screen and (min-width: 1280px) {
  .contacts__share {
    margin-top: 44px;
  }
}
@media screen and (min-width: 1440px) {
  .contacts__link {
    font-size: 18px;
    line-height: 24px;
  }
  .contacts__share {
    font-size: 18px;
    line-height: 24px;
  }
}
</style>
