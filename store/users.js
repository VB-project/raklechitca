import axios from 'axios';

export const state = () => ({
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

  usersApi: [],
  currentUser: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchUsersApi(state) {
    return axios.get('https://api-test.pa7lux.ru/streams').then(response => {
      return state.commit('setState', {
        name: 'usersApi',
        value: response.data,
      });
    });
  },
  fetchUsersApiWithID(state, payload) {
    return axios
      .get(`https://api-test.pa7lux.ru/streams/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'currentUser',
          value: response.data,
        });
      });
  },
};

export const getters = {
  getUsers(state) {
    return state.users;
  },
  getCurrentUsers(state) {
    return state.currentUser;
  },
};
