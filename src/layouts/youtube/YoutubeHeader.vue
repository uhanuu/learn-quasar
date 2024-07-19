<template>
  <q-header class="bg-white text-grey-8" height-hint="56">
    <q-toolbar>
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-avatar>
        <q-img src="/this-logo.png" />
      </q-avatar>

      <!-- shrink를 통해서 컨텐츠 크기만큼만 영역을 차지함  -->
      <q-toolbar-title class="text-subtitle1 text-weight-bolder" shrink
        >This One</q-toolbar-title
      >
      <q-space />

      <div class="search row items-center">
        <q-input
          class="col-grow"
          outlined
          square
          dense
          placeholder="검색"
          @focus="activateSearchInput"
          @blur="deactivateSearchInput"
        >
          <template v-if="isSearchFocus" #prepend>
            <q-icon name="search" />
          </template>
          <template #append>
            <q-icon name="keyboard" />
          </template>
        </q-input>
        <q-btn
          class="search-btn"
          icon="search"
          unelevated
          color="grey-4"
          text-color="black"
          square
        />
        <q-btn
          icon="mic"
          unelevated
          color="grey-2"
          text-color="black"
          round
          class="q-ml-sm"
        />
      </div>
      <q-space />

      <q-btn flat round icon="more_vert" class="q-mr-sm" />
      <q-btn
        icon="account_circle"
        label="로그인"
        outline
        rounded
        color="primary"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from 'vue';

const isSearchFocus = ref(false);
const activateSearchInput = () => {
  isSearchFocus.value = true;
};
const deactivateSearchInput = () => {
  isSearchFocus.value = false;
};
</script>

<style lang="scss" scoped>
.q-toolbar {
  height: 56px;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #c9c9c9;
}

.search {
  min-width: 100px;
  max-width: 600px;
  width: 55%;
  &-btn {
    border-style: solid;
    border-width: 1px 1px 1px 0;
    border-color: #c9c9c9;
    max-width: 60px;
    width: 100%;
    height: 40px;
  }
}
</style>
