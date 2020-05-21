<template>
  <div class="tellStory">
    <nxt-title>О проекте</nxt-title>
    <div class="tellStory__content">
      <div class="tellStory__content-description">
        <p class="tellStory__content-description-text">
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </p>
      </div>
      <div class="tellStory__option-box">
        <div class="tellStory__options">
          <span class="tellStory__option tellStory__option_active"
            >Рак Лечится</span
          >
          <span class="tellStory__option">Фонд Хабенского</span>
        </div>
        <div class="tellStory__option-text">
          <span class="tellStory__option-text-item"
            >Есть вещи, которые не лечатся. Особенности характера, страстные
            увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
            приобрели в детстве. Список можно продолжать до бесконечности, но
            одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
            и лучшее доказательство — люди с их неизлечимыми особенностями,
            которые сумели победить рак.</span
          >
          <span class="tellStory__option-text-item"
            >Рак лечится — проект Благотворительного Фонда Константина
            Хабенского и Leo Burnett Moscow. С его помощью мы надеемся изменить
            отношение людей к раку и заставить каждого поверить: онкологическое
            заболевание — это не приговор.</span
          >
          <!-- <span class="tellStory__option-text-item">Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими и другими тяжелыми заболеваниями головного мозга. Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент, оплачивая обследования, лечение и медицинские препараты, но и в целом меняет систему оказания помощи детям с опухолями мозга в России.</span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Button from '@/components/ui/Button';

export default {
  components: {
    'nxt-title': Title,
    'nxt-button': Button,
  },
  methods: {
    showPopUp() {
      this.$store.commit('popup/togglePopup');
    },
  },
  props: {
    theme: String,
  },
};
</script>

<style scoped>
.tellStory {
  padding: 0 60px;
}
.tellStory__container {
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  margin-right: -60px;
  margin-left: -60px;
  padding: 100px 60px;
}

.tellStory__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tellStory__content-description {
  margin-right: 195px;
  width: 340px;
}

.tellStory__option-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.tellStory__option {
  margin-bottom: 10px;
}

.tellStory__option_active {
  font-weight: bold;
}
.tellStory__options {
  display: flex;
  flex-direction: column;
  /* min-width: 100px; */
  margin-right: 40px;
}

.tellStory__option-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
}

.tellStory__option-text-item {
  margin-bottom: 10px;
}

.tellStory__container_purple {
  background-color: #613a93;
  margin: 0;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
}

@media screen and (max-width: 1280px) {
  .tellStory__container {
    margin-left: -50px;
    margin-right: -50px;
  }
}

@media screen and (max-width: 768px) {
  .tellStory {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tellStory__container {
    display: flex;
    flex-direction: column;
    margin-right: -40px;
    margin-left: -40px;
    padding: 80px 80px;
    align-items: center;
  }
  .tellStory__content {
    flex-direction: column;
    max-width: 50%;
  }
  .tellStory__option-box {
    flex-direction: column;
  }
  .tellStory__options {
    flex-direction: row;
  }
  .tellStory__content-description {
    margin: 0;
    width: 100%;
    margin-bottom: 80px;
  }
  .tellStory__option {
    margin-right: 30px;
  }
  .tellStory__option:last-child {
    margin-right: 0px;
  }
  .tellStory__option-text-item {
    margin-bottom: 50px;
  }
}
</style>
