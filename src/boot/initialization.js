import { LocalStorage, Dark } from 'quasar';
import { boot } from 'quasar/wrappers';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // Dark mode 설정
  const isDarkMode = LocalStorage.getItem('darkMode');
  Dark.set(isDarkMode);
});
