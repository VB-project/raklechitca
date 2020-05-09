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
  height: 256px;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: stretch;
}
.thanks__title {
  max-width: 23%;
  font-size: 2rem;
}
</style>
