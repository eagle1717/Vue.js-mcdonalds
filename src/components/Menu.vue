<template>
  <main class="grid gap-4 p-4 m-auto md:grid-cols-2">
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
        itemPrice: 5,
      },
      {
        id: 2,
        itemImage: require("@/assets/menu/potato.png"),
        itemPrice: 3,
      },
      {
        id: 3,
        itemImage: require("@/assets/menu/cola.png"),
        itemPrice: 2,
      },
    ];
  }
}
</script>
