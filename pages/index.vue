<template>
  <div class="container">
    <info />
    <story />
    <info>
      <h2>И В ОТЛИЧИЕ ОТ РАКА, #ЭТОНЕЛЕЧИТСЯ</h2>
    </info>
    <habits>
      <panel v-for="user in users" :key="user.id" class="container__panel">
        <card :title="user.name" :text="user.description" :url="user.image" />
      </panel>
    </habits>
    <info>
      <h2>РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ #ЭТОНЕЛЕЧИТСЯ</h2>
    </info>
    <instagram />

    <about />

    <statistics />
    <info>
      <h1>#РАКЛЕЧИТСЯ</h1>
      <h2>О проекте</h2>
      <div>
        <p>
          Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </p>
        <p>
          <span>Рак Лечится</span>
          <span>Фонд Хабенского</span>
        </p>
        <p>
          Есть вещи, которые не лечатся. Особенности характера, страстные
          увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
          приобрели в детстве. Список можно продолжать до бесконечности, но одна
          болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и
          лучшее доказательство — люди с их неизлечимыми особенностями, которые
          сумели победить рак. Рак лечится — проект Благотворительного Фонда
          Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся
          изменить отношение людей к раку и заставить каждого поверить:
          онкологическое заболевание — это не приговор.
        </p>
      </div>
      <p>
        Этот проект был создан благотворительным фондом Константина Хабенского.
      </p>
    </info>

    <thanks />
    <footer />
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import Info from '@/components/Info';
import Story from '@/components/Story';
import Habits from '@/components/Habits';
import Instagram from '@/components/Instagram';
import About from '@/components/About';
import Card from '@/components/Card';
import Thanks from '@/components/Thanks';
import Statistics from '@/components/Statistics';

export default {
  components: {
    panel: Panel,
    info: Info,
    story: Story,
    card: Card,
    thanks: Thanks,
    habits: Habits,
    instagram: Instagram,
    about: About,
    statistics: Statistics,
  },
  data() {
    return {
      popupShow: false,
      users: [
        {
          id: '1',
          name: 'Владимир Тен',
          image: 'https://via.placeholder.com/150/d32776',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '2',
          name: 'Владимир Тен',
          image: 'https://via.placeholder.com/150/d32776',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '3',
          name: 'Владимир Тен',
          image: 'https://via.placeholder.com/150/d32776',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '4',
          name: 'Владимир Тен',
          image: 'https://via.placeholder.com/150/d32776',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '5',
          name: 'Владимир Тен',
          image: 'https://via.placeholder.com/150/d32776',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '6',
          name: 'Владимир Тен',
          image: 'https://via.placeholder.com/150/d32776',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
      ],
    };
  },
};
</script>

<style>
input {
  display: block;
}
</style>
