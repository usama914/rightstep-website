<template>
  <div class="card" style="width: 16rem">
    <slot name="project-img">
      <img
        src="https://revenuesandprofits.com/wp-content/uploads/2023/02/What-Type-of-Property-is-the-Best-Investment.jpg"
        class="card-img-top"
        alt="..."
      />
    </slot>
    <div class="overlay">
      <p class="overlay-text">
        <slot name="project-text"> Your text here </slot>
        <br />
        <slot name="project-number"> 2 </slot>
      </p>
    </div>
  </div>
</template>
<style scoped>
.card-details {
  display: flex;
  justify-content: space-between;
}

.card {
  position: relative;
  width: 19rem;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
  opacity: 0;
  /* transition: opacity 0.3s ease; */
  /* transform: scaleY(1); */
  transition: all 0.3s ease-in-out 0s;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card:hover .overlay {
  opacity: 1;
  cursor: pointer;
}

.overlay-text {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

</style>
