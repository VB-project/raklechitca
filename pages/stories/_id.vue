<template>
  <div class="card-page">
    <div v-if="mobile" class="card-page__mobile">
      <div class="card-page__main">
        <span class="card-page__title">{{ currentUser.author }}</span>
        <span class="card-page__qoute">{{ currentUser.title }}</span>
      </div>
      <img :src="currentUser.image" class="card-page__image" />

      <div class="card-page__share">
        <nxt-button :theme="'share'">Поделитесь &#8599;</nxt-button>
        <span class="card-page__date">20 апреля 2018</span>
      </div>
    </div>

    <div v-else class="card-page__descripton">
      <div class="card-page__image-wrapper">
        <img
          :src="url + currentUser.ImageUrl[0].url"
          class="card-page__image"
        />
      </div>
      <div class="card-page__about">
        <div class="card-page__main">
          <span class="card-page__title">{{ currentUser.author }}</span>
          <span class="card-page__qoute">{{ currentUser.title }}</span>
        </div>
        <div class="card-page__share">
          <nxt-button :theme="'share'">Поделитесь &#8599;</nxt-button>
          <span class="card-page__date">20 апреля 2018</span>
        </div>
      </div>
    </div>

    <p class="card-page__text" v-html="currentUser.text"></p>
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
          :title="user.author"
          :text="user.title"
          :url="url + user.ImageUrl[0].formats.small.url"
          @cardClick="goToDetail(user.id)"
        />
      </panel>
    </div>
    <nxt-button @btnClick="goToStories" :theme="'width'"
      >Больше статей</nxt-button
    >
    <nxt-footer :blockName="'footer'" />
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import Card from '@/components/Card';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export default {
  components: {
    panel: Panel,
    card: Card,
    'nxt-button': Button,
    'nxt-footer': Footer,
  },
  data() {
    return {
      mobile: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters['users/getCurrentUsers'];
    },
    users() {
      return this.$store.getters['users/getUsers'];
    },
    url() {
      return process.env.BASE_URL;
    },
  },
  async fetch({ store, route }) {
    await store.dispatch('users/fetchUsersApiWithID', { id: route.params.id });
  },
  methods: {
    goToStories() {
      this.$router.push('/stories/');
    },
    goToDetail(id) {
      this.$router.push(`/stories/${id}`);
    },
    onResize() {
      this.mobile = document.documentElement.clientWidth > 768 ? false : true;
    },
  },
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
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

.card-page__image {
  width: 580px;
  height: 580px;
  object-fit: cover;
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
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  margin-top: 160px;
}

@media screen and (max-width: 768px) {
  .card-page {
    margin: 100px 64px;
  }

  .card-page__mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-page__descripton {
    flex-direction: column;
  }
  .card-page__image {
    width: 420px;
    height: 420px;
    margin-bottom: 60px;
  }
  .card-page__main {
    font-size: 30px;
    margin-bottom: 60px;
  }

  .card-page__container {
    margin-top: 120px;
  }
  .footer__container {
    padding-bottom: 0;
    margin-top: 70px;
  }
}
</style>
