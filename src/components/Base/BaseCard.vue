<template>
  <div
    class="menu-card rounded shadow p-2 bg-gray-100 relative"
    :id="menuItem.id"
  >
    <img
      v-if="withDiscount"
      src="@/assets/price-tag.svg"
      class="absolute right-0 top-0 w-5 h-5"
      alt=""
    />
    <h4 class="text-center font-semibold">
      {{ $t(`menu[${menuItem.id - 1}].title`) }}
    </h4>
    <img
      :src="menuItem.itemImage"
      alt=""
      v-show="menuItem.isVisible"
      class="img object-cover m-auto mt-2"
      @load="menuItem.isVisible = true"
    />
    <div
      class="img m-auto mt-2 bg-yellow-300 relative rounded"
      v-if="!menuItem.isVisible"
    >
      <span class="absolute m-auto left-0 right-0 top-0 bottom-0 w-max text-sm"
        >Loading...</span
      >
    </div>
    <h6 class="text-sm mt-2 text-center">
      <span class="font-medium">{{ $t("price") }}:</span> {{ itemPrice }} $
    </h6>
    <p class="text-xs text-center mt-2">
      {{ $t(`menu[${menuItem.id - 1}].description`) }}
    </p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { menuItemInterface } from "@/interfaces/index";
@Component
export default class BaseCard extends Vue {
  @Prop({}) menuItem!: menuItemInterface;
  withDiscount: boolean = false;
  get itemPrice(): number {
    if (this.menuItem.itemPrice >= 5) {
      this.withDiscount = true;
      return (this.menuItem.itemPrice = this.menuItem.itemPrice * 0.8);
    } else {
      return this.menuItem.itemPrice;
    }
  }
  set itemPrice(value: number) {
    this.menuItem.itemPrice = value;
  }
}
</script>
<style lang="scss">
.w-max {
  height: max-content;
}
.img {
  width: 100%;
  height: 280px;
  max-width: 280px;
}
</style>
