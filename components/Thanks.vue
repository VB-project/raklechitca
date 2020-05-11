<template>
  <div class="thanks__container">
    <h2 class="thanks__title">
      Спасибо всем, кто помог состояться этому проекту
    </h2>
    <main-menu />
    <contacts />
  </div>
</template>

<script>
import Menu from '@/components/Menu';
import Contacts from '@/components/Contacts';
export default {
  components: {
    'main-menu': Menu,
    contacts: Contacts,
  },
};
</script>

<style scoped>
.thanks__container {
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: stretch;
}
.thanks__title {
  max-width: 23%;
}
@media screen and (min-width: 768px) {
  .thanks__container {
    margin: 50px 50px 90px 50px;
  }
  .thanks__title {
    font-size: 24px;
    line-height: 28px;
  }
}
@media screen and (min-width: 1280px) {
  .thanks__container {
    margin: 50px 50px 104px 50px;
  }
  .thanks__title {
    font-size: 28px;
    line-height: 32px;
  }
}
@media screen and (min-width: 1440px) {
  .thanks__container {
    margin: 60px 60px 110px 60px;
  }
  .thanks__title {
    font-size: 32px;
    line-height: 36px;
  }
}
</style>
