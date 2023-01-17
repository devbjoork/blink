import HomeView from '@renderer/views/HomeView.vue';
import RequestCollectionView from '@renderer/views/RequestCollectionView.vue';

export const routes = [
  { path: '/home', component: HomeView },
  { path: '/project', component: RequestCollectionView }
];
