import { boot } from 'quasar/wrappers';
// 부트파일은 하나의 특수한 목적을 가지게 만드는게 좋다.
import { Loading } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  Loading.setDefaults({
    delay: 300,
    message: '로딩중입니다.',
    spinnerSize: 40,
    spinnerColor: 'green-6',
  });
});
