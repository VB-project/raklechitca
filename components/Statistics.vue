<template>
  <div class="statistics__container">
    <h2 class="statistics__title">Статистика по онкозаболеваниям</h2>
    <div class="statistics__card">
      <p class="statistics__card-text">
        Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000
        человек.
      </p>
      <statusbar :value="1" :maxValue="3" />
      <h2 class="statistics__count">1 из 3</h2>
      <span class="statistics__source">Левада-Центр 2018</span>
    </div>

    <h2 class="statistics__title">Статистика по онкозаболеваниям</h2>
    <div class="statistics__card">
      <p class="statistics__card-text">
        Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000
        человек.
      </p>
      <statusbar :value="1" :maxValue="3" />
      <h2 class="statistics__count">1 из 3</h2>
      <span class="statistics__source">Левада-Центр 2018</span>
    </div>

    <h2 class="statistics__title">Статистика по онкозаболеваниям</h2>
    <div class="statistics__card">
      <p class="statistics__card-text">
        Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000
        человек.
      </p>
      <statusbar :value="1" :maxValue="3" />
      <h2 class="statistics__count">1 из 3</h2>
      <span class="statistics__source">Левада-Центр 2018</span>
    </div>

    <h2 class="statistics__title">Статистика по онкозаболеваниям</h2>
    <div class="statistics__card">
      <p class="statistics__card-text">
        Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000
        человек.
      </p>
      <statusbar :value="1" :maxValue="3" />
      <h2 class="statistics__count">1 из 3</h2>
      <span class="statistics__source">Левада-Центр 2018</span>
    </div>
  </div>
</template>

<script>
import Statusbar from '@/components/ui/Statusbar';

export default {
  components: {
    statusbar: Statusbar,
  },
};
</script>

<style scoped>
.statistics__container {
}
</style>
