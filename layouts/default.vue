<template>
  <div class="layout__container">
    <mobile-menu
      v-if="isMobileMenuOpened"
      class="mobile-menu"
      @btnClick="showPopUp"
    />
    <main-header />
    <nuxt />
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
import QuestionForm from '@/components/QuestionForm';
import MobileMenu from '@/components/MobileMenu';

export default {
  components: {
    'main-header': Header,
    overlay: Overlay,
    'pop-up': PopUp,
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
      this.$store.commit('quiz/setIsFinishedFalse');
    },
  },
};
</script>

<style>
html {
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
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.mobile-menu {
  display: none;
}

@media screen and (max-width: 1280px) {
  html {
    font-size: 14px;
  }
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 11, 4px;
  }
}
@media screen and (max-width: 768px) {
  .mobile-menu {
    display: flex;
  }
}
</style>
