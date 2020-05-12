<template>
  <div class="statistics__container">
    <nxt-title>Статистика по онкозаболеваниям</nxt-title>
    <div class="statistic__grid">
      <nxt-statcard
        :qoute="
          'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.'
        "
        :title="'1 из 3'"
        :source="'Левада-Центр 2018'"
      >
        <nxt-statusbar :value="1" :maxValue="3" />
      </nxt-statcard>

      <nxt-statcard
        :qoute="'2,6% Россиян имеют онкозаболевания.'"
        :title="'3 700 000'"
        :source="'Росстат 2018'"
      >
        <nxt-statusbar :value="2.3" :maxValue="100" />
      </nxt-statcard>

      <nxt-statcard
        :qoute="
          'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.'
        "
        :title="'↑28%'"
        :source="'МНИОИ Герцена 2018'"
      >
        <nxt-statusbar-thin :value="160" :newValue="208" />
      </nxt-statcard>

      <nxt-statcard
        :qoute="
          'На 25% снизилась смертность в течение первого года после постановки диагноза.'
        "
        :title="'↓25%'"
        :source="'МНИОИ Герцена 2018'"
      >
        <nxt-statusbar-thin :value="190" :newValue="142" />
      </nxt-statcard>
    </div>
  </div>
</template>

<script>
import Statusbar from '@/components/ui/Statusbar';
import Title from '@/components/Title';
import StatCard from '@/components/StatCard';
import StatusbarThin from '@/components/ui/StatusbarThin';

export default {
  components: {
    'nxt-statusbar': Statusbar,
    'nxt-title': Title,
    'nxt-statcard': StatCard,
    'nxt-statusbar-thin': StatusbarThin,
  },
};
</script>

<style scoped>
.statistics__container {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
.statistic__grid {
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 40px;
  margin-top: 40px;
  margin-bottom: 30px;
}
</style>
