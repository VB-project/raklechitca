<template>
  <div class="statcard__card">
    <p class="statcard__card-text">
      {{ qoute }}
    </p>
    <div class="statcard__info-container">
      <slot></slot>
      <h2 class="statcard__count">{{ title }}</h2>
      <span class="statcard__source">{{ source }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['qoute', 'title', 'source'],
};
</script>

<style scoped>
.statcard__card {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 1px solid #efefef;
  box-sizing: border-box;
  justify-content: space-between;
}

.statcard__info-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.statcard__card-text {
  margin: 20px;
}

.statcard__count {
  width: 100%;
  /* margin: 20px; */
  text-align: right;
  padding: 20px;
}
.statcard__source {
  margin: 20px;
  margin-top: 0;
}
</style>
