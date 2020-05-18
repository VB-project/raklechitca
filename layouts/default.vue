<template>
  <div class="layout__container">
    <mobile-menu
      v-if="isMobileMenuOpened"
      class="mobile-menu"
      @btnClick="showPopUp"
    />
    <main-header />
    <nuxt />
    <nxt-footer />
    <overlay v-if="popupShown" @overlayClick="showPopUp"></overlay>
    <pop-up v-if="popupShown" @closeClick="showPopUp">
      <nxt-questionForm></nxt-questionForm>
    </pop-up>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Overlay from '@/components/ui/Overlay';
import PopUp from '@/components/PopUp';
import Footer from '@/components/Footer';
import QuestionForm from '@/components/QuestionForm';
import MobileMenu from '@/components/MobileMenu';

export default {
  components: {
    'main-header': Header,
    overlay: Overlay,
    'pop-up': PopUp,
    'nxt-footer': Footer,
    'nxt-questionForm': QuestionForm,
    'mobile-menu': MobileMenu,
  },

  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown'];
    },
    questions() {
      return this.$store.getters['questions/getQuestion'];
    },
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  methods: {
    showPopUp() {
      this.$store.commit('popup/togglePopup');
    },
  },
};
</script>

<style>
.layout__container {
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  max-width: 1600px;
  min-width: 320px;
  /* padding: 0px 60px 0px 60px; */
}
/* html {
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} */
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
/* body {
  min-width: 320px;
} */
.mobile-menu {
  display: none;
}
@media screen and (max-width: 768px) {
  .mobile-menu {
    display: flex;
  }
}
</style>
