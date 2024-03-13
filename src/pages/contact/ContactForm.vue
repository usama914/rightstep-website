<template>
  <div class="container contact-info">
    <!--  -->
    <div class="left-info">
      <h2 class="title-five">Get in touch with us</h2>
      <p class="text-default">We provide a complete service for the sale, purchase.</p>

      <div class="info mt-5">
        <div class="mb-4">
          <h4>Find us at</h4>
          <p class="text-default">
            <i class="fa-solid fa-location-dot me-2"></i>Islamabad, Pakistan
          </p>
        </div>
        <div>
          <h4>Reach out to us at</h4>
          <div class="basic-info">
            <p class="text-default"><i class="fa-solid fa-envelope me-2"></i>abc@gmail.com</p>
            <p class="text-default"><i class="fa-solid fa-phone me-2"></i>+92 234 567 890</p>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="right-info">
      <h2 class="title-five" style="font-size: 25px">Contact Us</h2>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" placeholder="Your Name" />
        <label for="floatingInput">Name</label>
      </div>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" placeholder="Your Email" />
        <label for="floatingPassword">Email</label>
      </div>
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
        <label for="floatingTextarea2">Comments</label>
      </div>
      <base-button>
        <template #btn>Submit</template>
      </base-button>
    </div>
  </div>
</template>
<style scoped>
.contact-info {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.right-info {
  max-width: 35rem;
  width: 100%;
  background-color: #f9fbfc;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 25px;
  padding-left: 25px;
  box-sizing: border-box;
}

@media (max-width: 1200px) {
  .contact-info {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .right-info {
    max-width: 40rem;
  }
  .info {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
  }
  .basic-info {
    display: flex;
    gap: 10px;
  }
}
@media (max-width: 780px) {
  .info {
    flex-direction: column;
    gap: 20px;
  }
  .basic-info {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
