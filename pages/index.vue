<template>
  <div class="container">
    <info :theme="'fixed'" />
    <story />
    <info :theme="'thin'">
      <nxt-title :theme="'wide'"
        >И В ОТЛИЧИЕ ОТ РАКА, <b>#ЭТОНЕЛЕЧИТСЯ</b></nxt-title
      >
    </info>
    <habits>
      <panel
        v-for="user in users.slice(0, 8)"
        :key="user.id"
        class="container__panel"
      >
        <card :title="user.name" :text="user.description" :url="user.image" />
      </panel>
    </habits>
    <info :theme="'thin'">
      <nxt-title :theme="'wide'"
        >РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ <b>#ЭТОНЕЛЕЧИТСЯ</b></nxt-title
      >
    </info>
    <instagram />
    <about>
      <nxt-textBlock
        :description="content[0].description"
        :option1="content[0].option1"
        :option2="content[0].option2"
        :content="content[0].content"
      >
        <nxt-button @btnClick="$emit('btnClick')" :theme="'purple'"
          >Заполнить форму</nxt-button
        >
      </nxt-textBlock>
    </about>

    <statistics />
    <info :theme="'tall'">
      <nxt-title :theme="'info'">
        #РАКЛЕЧИТСЯ
      </nxt-title>
      <about :theme="'purple'">
        <nxt-textBlock
          :description="content[1].description"
          :option1="content[1].option1"
          :option2="content[1].option2"
          :content="content[1].content"
          :content2="content[1].content2"
        ></nxt-textBlock>
      </about>
    </info>

    <thanks />
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
import Button from '@/components/ui/Button';
import TextBlock from '@/components/TextBlock';
import Title from '@/components/Title';

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
    'nxt-textBlock': TextBlock,
    'nxt-button': Button,
    'nxt-title': Title,
  },
  methods: {},
  data() {
    return {
      users: [
        {
          id: '1',
          name: 'Владимир Тен',
          image:
            'https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '2',
          name: 'Владимир Тен',
          image:
            'https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '3',
          name: 'Владимир Тен',
          image:
            'https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '4',
          name: 'Владимир Тен',
          image:
            'https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '5',
          name: 'Владимир Тен',
          image:
            'https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '6',
          name: 'Владимир Тен',
          image:
            'https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '7',
          name: 'Владимир Тен',
          image:
            'https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '8',
          name: 'Владимир Тен',
          image:
            'https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '9',
          name: 'Владимир Тен',
          image:
            'https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: '10',
          name: 'Владимир Тен',
          image:
            'https://static.tildacdn.com/tild6236-3462-4634-a362-653061313562/IMG_20191024_184116.jpg',
          description:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
      ],
      content: [
        {
          id: '1',
          description:
            'Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта поделиться своей историей неизлечимых привычек, навязчивых идей и болезненных привязанностей.',
          option1: '1-й вариант',
          option2: '2-й вариант',
          content:
            'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.',
        },
        {
          id: '2',
          description:
            'Этот проект был создан благотворительным фондом Константина Хабенского.',
          option1: 'Рак Лечится',
          option2: 'Фонд Хабенского',
          content:
            'Есть вещи, которые не лечатся. Особенности характера, страстные увлечения, привычки, ставшие частью нашего «я», фобии, которые мы приобрели в детстве. Список можно продолжать до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и лучшее доказательство — люди с их неизлечимыми особенностями, которые сумели победить рак.',
          content2:
            'Рак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить каждого поверить: онкологическое заболевание — это не приговор.',
        },
      ],
    };
  },
};
</script>

<style>
.container {
  margin: 0px 60px 0px 60px;
}
input {
  display: block;
}
</style>
