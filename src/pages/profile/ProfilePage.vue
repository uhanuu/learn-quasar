<template>
  <q-page padding>
    <section class="row q-col-gutter-x-xl q-py-lg">
      <div class="col-12 col-sm-auto q-py-md flex flex-center">
        <q-avatar size="150px">
          <q-img src="/this-logo.png" />
        </q-avatar>
      </div>
      <div class="col-12 col-sm-grow column justify-between">
        <div class="row items-center">
          <span class="text-h6 text-weight-bold">uhanuu</span>
          <q-space />
          <div class="q-gutter-x-sm">
            <q-btn unelevated class="profile_btn" label="프로필 편집" />
            <q-btn unelevated class="profile_btn" label="보관된 스토리 보기" />
            <q-btn unelevated class="q-pa-xs" flat icon="settings" />
          </div>
        </div>
        <div class="q-gutter-x-lg">
          <div class="inline-block">
            게시물 <span class="text-weight-bolder">6</span>
          </div>
          <div class="inline-block">
            팔로워 <span class="text-weight-bolder">368</span>
          </div>
          <div class="inline-block">
            팔로우 <span class="text-weight-bolder">349</span>
          </div>
        </div>
        <div class="column">
          <span>유현우</span>
          <span>@u_olyx</span>
        </div>
      </div>
    </section>
    <section>
      <div class="row no-wrap scroll q-col-gutter-x-xl">
        <div class="col-auto" v-for="n in 15" :key="n">
          <article>
            <q-avatar size="70px">
              <q-img src="/this-logo.png" />
            </q-avatar>
            <div class="text-center q-mt-sm">제목</div>
          </article>
        </div>
      </div>
    </section>
    <section class="q-mt-xl">
      <q-tabs
        class="q-mb-lg"
        v-model="tab"
        inline-label
        switch-indicator
        indicator-color="primary"
      >
        <!-- <q-tab name="mails" icon="mail" label="게시글" />
        <q-tab name="alarms" icon="alarm" label="저장됨" />
        <q-tab name="movies" icon="movie" label="태그됨" /> -->
        <q-route-tab
          :ripple="false"
          icon="edit"
          to="/profile"
          label="게시글"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="bookmark_border"
          to="/profile/saved"
          label="저장됨"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="local_offer"
          to="/profile/tagged"
          label="태그됨"
          exact
        />
      </q-tabs>
      <router-view />
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('mails');
</script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
.profile_btn {
  background-color: #efefef;
  font-weight: 800;
  border-radius: 8px;
}
</style>
