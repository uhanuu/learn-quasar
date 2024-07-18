import { LocalStorage, Quasar } from 'quasar';
import { boot } from 'quasar/wrappers';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  const langPack = LocalStorage.getItem('lang');
  import(`../../node_modules/quasar/lang/${langPack}.js`).then(lang => {
    Quasar.lang.set(lang.default);
  });
});
