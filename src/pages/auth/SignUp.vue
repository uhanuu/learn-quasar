<template>
  <q-page class="flex flex-center">
    <q-card flat :style="{ minWidth: '400px' }">
      <q-card-section>
        <div class="text-h6 text-weight-bold">회원가입</div>
        <div class="text-subtitle2 text-grey">함께해 주셔서 감사합니다 🤗</div>
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
            <q-input
              filled
              type="password"
              label="비밀번호 확인"
              hint="영문 대/소문자 포함 8자 이상 입력해주세요"
            />
            <!-- input에 class를 적용하기 위해 input-class -->
            <q-input
              input-class="text-right"
              filled
              label="나이"
              prefix="만 나이"
              suffix="세"
            />
            <!-- https://quasar.dev/vue-components/input#mask -->
            <q-input
              filled
              label="Card"
              mask="#### #### #### ####"
              fill-mask="#"
              hint="Mask: #### #### #### ####, FillMask: #"
            />
          </div>
          <q-btn
            label="가입하기"
            class="full-width q-mt-lg"
            unelevated
            color="primary"
            size="lg"
          />
          <q-btn
            label="로그인 하기"
            class="full-width q-mt-md"
            flat
            to="/auth/sign-in"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup></script>
