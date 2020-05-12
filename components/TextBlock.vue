<template>
  <div class="textblock">
    <div class="textblock__description">
      <p>
        {{ description }}
      </p>
    </div>
    <div class="textblock__main-content">
      <div class="textblock__option-container">
        <span class="textblock__option textblock__option_active">{{
          option1
        }}</span>
        <span class="textblock__option">{{ option2 }}</span>
      </div>
      <div class="textblock__content">
        <p class="textblock__content-value">
          {{ content }}
          <br />
          <br />

          {{ content2 }}
        </p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['description', 'option1', 'option2', 'content', 'content2'],
};
</script>

<style scoped>
slot {
  margin: 0;
}
.textblock {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.textblock__main-content {
  display: flex;
  flex-direction: row;
}
.textblock__description {
  max-width: 340px;
}
.textblock__content {
  max-width: 640px;
}
.textblock__content-value {
  margin-bottom: 78px;
}
.textblock__option-container {
  display: flex;
  flex-direction: column;
  margin-right: 40px;
}
.textblock__option {
  margin-bottom: 10px;
}
.textblock__option_active {
  font-weight: bold;
}
</style>
