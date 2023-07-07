import { createRouter, createWebHistory } from 'vue-router';

import WeatherWidget from '../components/WeatherWidget.vue';
import PhotoWidget from '../components/PhotoWidget.vue';
import GameWidget from '../components/GameWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';


const routes = [
  { path: '/', component: WeatherWidget },
  { path: '/photo', component: PhotoWidget },
  { path: '/game', component: GameWidget },
  { path: '/stopwatch', component: StopwatchWidget },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;