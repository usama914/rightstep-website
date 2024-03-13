<template>
  <div class="properties">
    <div class="card" style="width: 19rem">
      <slot name="property-img">
        <img
          src="https://revenuesandprofits.com/wp-content/uploads/2023/02/What-Type-of-Property-is-the-Best-Investment.jpg"
          class="card-img-top"
          alt="..."
        />
      </slot>
      <div class="card-body">
        <p class="card-text text-start">
          <small class="text-body-secondary"
            ><slot name="property-added">3 days ago</slot></small
          >
        </p>

        <div class="card-details">
          <div class="text-start">
            <h5 class="card-title"><slot name="property-name">Beautiful House </slot></h5>
            <p class="card-text">
              <small class="text-body-secondary">
                <slot name="property-location">Location</slot>
              </small>
            </p>
          </div>
          <h5 class="card-title"><slot name="property-price">$400000 </slot></h5>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-details {
  display: flex;
  justify-content: space-between;
}

img {
  height: 320px;
  object-fit: cover;
  border-radius: 0 !important;
}
</style>
