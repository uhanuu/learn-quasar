<template>
  <div class="flex flex-center"></div>
  <q-page>
    <div class="row window-height">
      <div class="col" :class="hasProfileSize">
        <q-img height="100vh" src="/sign-up-bg.jpg" />
      </div>
      <div class="col flex flex-center">
        <q-card flat :style="{ minWidth: '400px' }">
          <q-card-section>
            <div class="text-h6 text-weight-bold">로그인 하기</div>
            <div class="text-subtitle2 text-grey">
              재방문 해주셔서 감사합니다 🤗
            </div>
          </q-card-section>
          <q-card-section>
            <q-form>
              <div class="q-gutter-y-lg">
                <q-input filled label="이메일" hint="email을 입력해주세요" />
                <q-input
                  filled
                  type="password"
                  label="비밀번호"
                  hint="영문 대/소문자 포함 8자 이상 입력해주세요"
                />
              </div>
              <q-btn
                label="로그인"
                class="full-width q-mt-lg"
                unelevated
                color="primary"
                size="lg"
              />
              <q-btn
                label="회원가입"
                class="full-width q-mt-md"
                flat
                to="/auth/sign-up"
              />
              <q-btn
                label="대시보드로 이동"
                class="full-width q-mt-md"
                flat
                to="/"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { computed } from 'vue';

const $q = useQuasar();
const hasProfileSize = computed(() => ({ hidden: $q.screen.lt.md }));
</script>
