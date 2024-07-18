<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Date Util</div>
      <q-separator class="q-my-md" />
      <div class="text-h6">formatDate - {{ formatDate(now, DATE_FORMAT) }}</div>
      <div class="text-h6">
        addDate - {{ formatDate(addToDate(now, { days: 7 }), DATE_FORMAT) }}
      </div>
      <div class="text-h6">
        subtractDate -
        {{ formatDate(subtractFromDate(now, { days: 7 }), DATE_FORMAT) }}
      </div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">Format Util</div>
      <q-separator class="q-my-md" />
      <div class="text-h6">pad - {{ pad('hello', 10, '#') }}</div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">Type Checking Util</div>
      <q-separator class="q-my-md" />
      <div class="text-h6">objA === objB - {{ objA === objB }}</div>
      <div class="text-h6">
        is.deepEqual(objA, objB) - {{ is.deepEqual(objA, objB) }}
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { date, format, is } from 'quasar';

const { formatDate, addToDate, subtractFromDate } = date;
const now = new Date();
const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

const { pad } = format;

const objA = { name: 'abc', test: { hello: { kkk: { a: 1 } } } };
const objB = { name: 'abc', test: { hello: { kkk: { a: 1 } } } };
</script>

<style lang="scss" scoped></style>
