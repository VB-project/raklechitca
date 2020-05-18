<template>
  <div class="card-page">
    <div class="card-page__descripton">
      <div class="card-page__image-wrapper">
        <img :src="currentUser.image" class="card-page__image" />
      </div>
      <div class="card-page__about">
        <div class="card-page__main">
          <span class="card-page__title">{{ currentUser.name }}: </span>
          <span class="card-page__qoute">«{{ currentUser.description }}»</span>
        </div>
        <div class="card-page__share">
          <nxt-button :theme="'share'">Поделитесь &#8599;</nxt-button>
          <span class="card-page__date">20 апреля 2018</span>
        </div>
      </div>
    </div>
    <p class="card-page__text">
      Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в
      ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными. У
      меня дома до сих пор стоят часы в каждой комнате, хотя они и не нужны
      особо — я сам чувствую, опаздываю куда-то или нет, отстаю от нужного
      графика или опережаю. Вот такие встроенные внутренние часы! Будильник мне
      тоже не нужен — я всегда встаю раньше. Одеваюсь тоже быстро, как в армии,
      за 45 секунд.«В футболе если команда опоздала на 15 минут, ей
      засчитывается поражение». Опаздывать я тоже не люблю, на все встречи
      прихожу заранее. Если знаю, что могу попасть по дороге в пробку, то не еду
      на машине. В аэропорт приезжаю задолго до начала регистрации. Лучше
      подожду и кофе попью, чем опоздаю! Когда мне было 16 лет, мне в школе
      геометрию нужно было пересдавать. Я билеты выучил, знал абсолютно все.
      Пришел в нужное время, а учительница — нет. Ну, я какое-то время подождал
      ее и ушел. Потом она спрашивала: «Почему не дождался?». Я ответил: «В
      футболе если команда опоздала на 15 минут, ей засчитывается поражение».
      Экзамен мне все-таки поставили! Сейчас если кто-то из футболистов моей
      команды опаздывает — начинаю злиться, могу и прикрикнуть потом. А если
      кто-то опоздал на тренировку перед игрой — все, подготовка насмарку. Я
      сразу начинаю думать тогда: «Значит, точно проиграем». Такая болезненная
      пунктуальность уже не лечится. В отличие от рака. «Сейчас если кто-то из
      футболистов моей команды опаздывает — начинаю злиться, могу и прикрикнуть
      потом. А если кто-то опоздал на тренировку перед игрой — все, подготовка
      насмарку. Я сразу начинаю думать тогда: «Значит, точно проиграем». Такая
      болезненная пунктуальность уже не лечится».
    </p>
    <nxt-button class="card-page__share-btn" :theme="'share'"
      >Поделитесь этой статьей в своих социальных сетях &#8599;</nxt-button
    >

    <div class="card-page__container">
      <panel
        v-for="user in users.slice(0, 4)"
        :key="user.id"
        class="stories-page__panel"
      >
        <card
          :title="user.name"
          :text="user.description"
          :url="user.image"
          @cardClick="goToDetail(user.id)"
        />
      </panel>
    </div>
    <nxt-button @btnClick="goToStories" :theme="'width'"
      >Больше статей</nxt-button
    >

    <!-- <div v-html="currentUser.description"></div> -->

    <!-- :url="this.$store.state.users.users[0].image"
      :title="this.$store.state.users.users[0].name"
    :text="this.$store.state.users.users[0].description"-->
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import Card from '@/components/Card';
import Button from '@/components/ui/Button';
export default {
  components: {
    panel: Panel,
    card: Card,
    'nxt-button': Button,
  },
  // async fetch({ store, route }) {
  //   await store.dispatch('users/fetchUsersApiWithID', { id: route.params.id });
  // },
  computed: {
    currentUser() {
      return this.$store.getters['users/getCurrentUsers'];
    },
    users() {
      return this.$store.getters['users/getUsers'];
    },
  },
  methods: {
    goToStories() {
      this.$router.push('/stories/');
    },
  },
};
</script>

<style lang="css" scoped>
.card-page {
  margin: 100px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
}

.card-page__descripton {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

/* .card-page__image-wrapper {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
} */

.card-page__image {
  width: 580px;
  height: 580px;
  /* width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0 */
}
.card-page__image:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}
.card-page__main {
  font-size: 2.375rem;
}

.card-page__title {
  font-weight: bold;
}
.card-page__about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
  width: 100%;
}

.card-page__share {
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
}

.card-page__share-btn {
  width: 54%;
  padding: 30px 0px;
  margin-top: 70px;
}
.card-page__text {
  max-width: 54%;
  margin-top: 130px;
  font-size: 1.375rem;
}
.card-page__container {
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 40px;
  margin-top: 160px;
}
</style>
