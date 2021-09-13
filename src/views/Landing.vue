<template>
  <div id="wrapper">
    <Header />
    <div class="text-sm text-right px-4 pt-2">
      <span
        v-for="lng in languages"
        :key="lng.code"
        class="cursor-pointer ml-2 lng"
        @click="turnLanguage(lng.code)"
        :class="{ underline: $i18n.locale == lng.code }"
        >{{ lng.code.toUpperCase() }}</span
      >
    </div>
    <Menu />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import { Component } from "vue-property-decorator";
@Component({
  components: {
    Header,
    Menu,
  },
})
export default class Landing extends Vue {
  languages: object[] = [
    {
      code: "en",
    },
    {
      code: "ru",
    },
    {
      code: "az",
    },
  ];
  turnLanguage(lng: string) {
    this.$i18n.locale = lng;
    localStorage.setItem("language", this.$i18n.locale);
  }
}
</script>
<style lang="scss">
.lng {
  &:nth-child(1) {
    margin-left: 0px;
  }
}
</style>
