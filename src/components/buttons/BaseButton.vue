<template>
  <button class="btn">
    <slot name="btn"> Learn More </slot>
  </button>
</template>

<style scoped>
.btn {
  font-size: 18px;
  line-height: 30px;
  font-weight: 500;
  border: none;
  color: rgb(255, 255, 255);
  box-sizing: border-box;
  width: 130px;
  margin: 20px 0px 0px;
  display: block !important;
  background-color: rgb(107, 230, 44) !important;
  padding: 8px 10px !important;
  border-radius: 0;
}
</style>
