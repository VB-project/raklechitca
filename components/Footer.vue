<template>
  <div class="footer__container">
    <div class="footer__thanks-container">
      <h2 class="footer__thanks-title">
        Спасибо всем, кто помог состояться этому проекту
      </h2>
      <main-menu class="footer__menu" :hide="true" />
      <contacts />
    </div>
    <div class="footer__copyright">
      <span class="footer__logo">Рак Лечится {{ date }}</span>
      <span class="footer__author">Сделано студентами Яндекс Практикум</span>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu';
import Contacts from '@/components/Contacts';

export default {
  computed: {
    date() {
      return new Date().getFullYear();
    },
  },
  components: {
    'main-menu': Menu,
    contacts: Contacts,
  },
};
</script>

<style scoped>
.footer__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 0;
}
.footer__logo {
  color: #898989;
  font-size: 1.125rem;
}
.footer__author {
  color: #898989;
  font-size: 1.125rem;
}

.footer__copyright {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.footer__thanks-container {
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  width: 100%;
}
.footer__thanks-title {
  max-width: 30%;
  font-size: 2rem;
}

@media screen and (max-width: 768px) {
  .footer__thanks-title {
    font-size: 24px;
    max-width: 35%;
  }
  .footer__container {
    padding-top: 0;
    margin-top: 80px;
  }
  .footer__thanks-container {
    padding-bottom: 90px;
  }
  .footer__menu {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: space-between;
  }
}
</style>
