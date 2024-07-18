<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <!-- https://quasar.dev/options/quasar-language-packs#change-quasar-language-pack-at-runtime -->
      <div class="text-h4">Change Quasar Language Pack at Runtime</div>
      <q-separator class="q-my-md" />
      <q-select
        v-model="lang"
        :options="langOptions"
        label="퀘이사 언어"
        outlined
        emit-value
        map-options
      />
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">$q.lang</div>
      <q-separator class="q-my-md" />
      <div>
        {{ $q.lang }}
      </div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">i18n - locale</div>
      <q-separator class="q-my-md" />
      <div>locale - {{ locale }}</div>
      <div>hello - {{ t('hello') }}</div>
      <div>productName - {{ t('productName') }}</div>
    </section>
  </q-page>
</template>
<script>
import languages from 'quasar/lang/index.json';

const appLanguages = languages.filter(lang =>
  ['ko-KR', 'en-US'].includes(lang.isoName),
);

const langOptions = appLanguages.map(lang => ({
  label: lang.nativeName,
  value: lang.isoName,
}));
</script>

<!-- 반응형 데이터 -->
<script setup>
import { useQuasar } from 'quasar';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();
const lang = ref($q.lang.isoName);
const { t, locale } = useI18n();

watch(lang, val => {
  import(`../../node_modules/quasar/lang/${val}.js`).then(lang => {
    $q.lang.set(lang.default); // 퀘이사 내부 컴포넌트 언어 변경
    locale.value = val; // 자체 컴포넌트 언어 변경
    $q.localStorage.set('lang', val);
  });
});
</script>

<style lang="scss" scoped></style>
