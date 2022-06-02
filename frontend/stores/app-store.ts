import { HuStore } from './hu-store';
import { UiStore } from './ui-store';

export class AppStore {
  crmStore = new HuStore();
  uiStore = new UiStore();
}

export const appStore = new AppStore();
export const crmStore = appStore.crmStore;
export const uiStore = appStore.uiStore;
