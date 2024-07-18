import { LocalStorage } from 'quasar';
import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n'; // index.html 읽어오기 때문
import messages from 'src/i18n';

// https://vue-i18n.intlify.dev/ 실무 적용시 api 문서 읽어보기
// npm install --save vue-i18n@next
// https://quasar.dev/options/app-internationalization#setup-manually
export default boot(async ({ app }) => {
  const locale = LocalStorage.getItem('lang') || 'ko-KR';
  const i18n = createI18n({
    locale,
    messages,
  });
  app.use(i18n);
});
