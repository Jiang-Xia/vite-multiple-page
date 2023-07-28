import {createPinia} from 'pinia'

import useAppStore from '@/store/modules/app';
import useLocalAppStore from './modules/app';
const pinia = createPinia();

export { useAppStore,useLocalAppStore };
export default pinia;
