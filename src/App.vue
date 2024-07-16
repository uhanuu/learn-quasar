<template>
  <router-view />
</template>

<script setup>
defineOptions({
  name: 'App',
  mounted() {
    console.log('hello: ', this.hello);
  },
});
</script>
