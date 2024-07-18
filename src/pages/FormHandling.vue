<!-- https://quasar.dev/style/typography -->
<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">QForm component</div>
      <q-separator class="q-my-md" />
      <!-- rule -> https://github.com/quasarframework/quasar/blob/dev/ui/src/utils/patterns/patterns.js -->
      <!-- greedy -> submit 버튼 눌렀을 때 각각이 아니라 전부 validation 하는 경우 -->
      <q-form
        ref="myForm"
        class="q-gutter-y-md q-mt-lg"
        autofocus
        greedy
        @submit="onSubmit"
        @reset="onReset"
      >
        <q-input
          outlined
          v-model="form.title"
          label="제목"
          :rules="[val => !!val || '필수 항목입니다.']"
          lazy-rules
        />
        <!-- lazy-rules 커서가 사라질 때 처리 -->
        <q-input
          outlined
          v-model="form.content"
          label="내용"
          type="textarea"
          hint="50자 이내로 입력해주세요."
          counter
          maxlength="50"
          :rules="[
            val => !!val || '필수 항목입니다.',
            val => val.length <= 50 || '최대 50글자 이내로 입력하세요.',
          ]"
        />
        <q-select
          outlined
          v-model="form.tags"
          :options="tagOptions"
          label="태그"
          emit-value
          multiple
          hint="최대 2개 선택가능합니다."
          max-values="2"
          :rules="[
            val => val.length > 0 || '필수 항목입니다.',
            val => val.length <= 2 || '최대 2개 까지 선택 가능합니다.',
          ]"
        />
        <q-input outlined v-model="form.date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="form.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <!-- false-value="Disagreed" true-value="Agreed" 토글 true/false 일 때 value 값 지정가능 -->
        <q-toggle :label="'동의 하시겠습니까?'" v-model="form.accept" />
        <div class="q-gutter-x-sm">
          <q-btn label="validate" color="secondary" @click="validate" />
          <q-btn label="resetValidation" color="warning" @click="reset" />
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<!-- 비동기적으로 유효성 검사(이메일 체크, 서버와 통신하는 유효성 검사) https://quasar.dev/vue-components/input#async-rules -->
<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();

const myForm = ref(null);
const form = ref({
  title: '',
  content: '',
  tags: [],
  date: '2024/01/01',
  accept: false,
});

const tagOptions = ref([
  { label: '구글', value: 'google' },
  { label: '페이스북', value: 'Facebook' },
  { label: '트위터', value: 'Twitter' },
  { label: '애플', value: 'Apple' },
  { label: '오라클', value: 'Oracle' },
]);

const validate = () => {
  myForm.value.validate().then(success => {
    if (success) {
      alert('성공입니다.');
      return;
    }
    alert('실패입니다.');
  });
};

const reset = () => {
  myForm.value.resetValidation();
};

const onSubmit = () => {
  if (form.value.accept !== true) {
    alert('동의해주세요');
    return;
  }
  $q.loading.show({});
  setTimeout(() => {
    $q.loading.hide();
    alert('저장 완료되었습니다.');
  }, 3000);
};
const onReset = () => {
  form.value.title = '';
  form.value.content = '';
  form.value.tags = [];
  form.value.date = '2024/01/01';
  form.value.accept = false;
};
</script>

<style lang="scss" scoped></style>
