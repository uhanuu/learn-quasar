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

const $q = useQuasar();
const lang = ref($q.lang.isoName);

watch(lang, val => {
  import(`../../node_modules/quasar/lang/${val}.js`).then(lang => {
    $q.lang.set(lang.default);
    $q.localStorage.set('lang', val);
  });
});
</script>

<style lang="scss" scoped></style>
