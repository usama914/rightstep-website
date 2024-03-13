<template>
  <div class="card" style="width: 19rem">
    <slot name="news-img">
      <img
        src="https://revenuesandprofits.com/wp-content/uploads/2023/02/What-Type-of-Property-is-the-Best-Investment.jpg"
        class="card-img-top"
        alt="..."
      />
    </slot>
    <div class="card-body">
      <p class="card-text text-start">
        <small class="text-body-secondary"
          ><slot name="news-added">3 days ago</slot></small
        >
      </p>

      <div class="card-details">
        <div class="text-start mb-3">
          <h5 class="title-three">
            <slot name="news-description">Beautiful House </slot>
          </h5>
        </div>
        <button class="btn">
          <slot name="btn"> Read More <i class="fa-solid fa-angle-right"></i> </slot>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100px;
}
.btn {
  font-size: 15px;
  line-height: 30px;
  font-weight: 500;
  display: block;
  padding: 2px 4px;
  text-align: center;
  width: 120px;
  color: rgb(0, 0, 0);
  background-color: rgb(107, 230, 44);
  opacity: 1;
  cursor: pointer;
  border-radius: 0;
}
</style>
