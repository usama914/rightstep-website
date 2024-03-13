<template>
  <div class="card" style="width: 19rem">
    <div class="text-center">
      <slot name="service-img">
        <img src="../assets/professional-sevices/professional-services-1.png" alt="..." />
      </slot>
    </div>

    <div class="card-body my-3">
      <slot name="service-title">
      
      </slot>
      <slot name="service-text">
        <p class="card-text">
        
        </p>
      </slot>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 25%;
}
.card {
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px, rgb(255, 255, 255) 0px 0px 10px,
    rgba(0, 0, 0, 0.3) 0px 0px 10px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
}
.card-body {
    flex: 0;
}
</style>
