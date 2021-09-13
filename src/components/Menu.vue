<template>
  <main class="grid gap-4 gap-y-6 p-4 m-auto md:grid-cols-2">
    <BaseCard
      v-for="itmMenu in menuItems"
      :key="itmMenu.id"
      :menuItem="itmMenu"
    >
    </BaseCard>
  </main>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Menu extends Vue {
  menuItems: object[] = [];
  mounted() {
    this.menuItems = [
      {
        id: 1,
        itemImage: require("@/assets/menu/burger.png"),
        isVisible: false,
        itemPrice: 5,
      },
      {
        id: 2,
        itemImage: require("@/assets/menu/potato.png"),
        isVisible: false,
        itemPrice: 3,
      },
      {
        id: 3,
        itemImage: require("@/assets/menu/cola.png"),
        isVisible: false,
        itemPrice: 2,
      },
    ];
  }
}
</script>
