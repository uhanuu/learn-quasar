import { boot } from 'quasar/wrappers';
import { LoadingBar } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  LoadingBar.setDefaults({
    color: 'blue',
    size: '4px',
    // position: 'top',
  });
});
