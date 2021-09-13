<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  font-size: 28px;
}
</style>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class App extends Vue {
  checkLanguage() {
    let lclstg = localStorage.getItem("language");
    if (lclstg) {
      this.$i18n.locale = lclstg;
    }
  }
  mounted() {
    this.checkLanguage();
  }
}
</script>
