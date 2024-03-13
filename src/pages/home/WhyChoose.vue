<template>
  <div class="why-choose">
    <div class="left-content">
      <img
        class="why-choose-img-1"
        src="https://revenuesandprofits.com/wp-content/uploads/2023/02/What-Type-of-Property-is-the-Best-Investment.jpg"
        alt=""
      />

      <img
        class="why-choose-img-2"
        src="https://koliba.com.au/wp-content/uploads/2023/09/a3-1-900x604.jpg"
        alt=""
      />
    </div>
    <div class="right-content">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="heading-one">Why do many customers choose to use our services?</h5>
          <p class="card-text text-default">
            Our business is built on trust and integrity. This is intrinsic in everything
            we do, and is what gives our clients, colleagues, suppliers, partners and
            investors the confidence to work with us. We treat everyone individually,
            offering bespoke advice, which in turn builds long-term relationships and
            helps them to make better property decisions.
          </p>
          <router-link to="/why-us">
            <base-button>
              <template #btn> </template>
            </base-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-content {
  position: relative;
}
.why-choose {
  display: flex;
  justify-content: center;
  min-height: 470px;
  padding: 2rem 0;
  gap: 40px;
}
img {
  width: 350px;
}
.why-choose-img-1 {
  position: absolute;
  right: 100px;
  top: 90px;
}

.right-content {
  display: flex;
  justify-content: end;
  /* align-items: center; */
  /* border: 1px solid red; */
  max-width: 42rem;
}

@media (max-width: 950px) {
  .why-choose {
    flex-direction: column;
    align-items: center;
    gap: 80px;
  }
  .heading-one{
    text-align: center;
  }
  .left-content{
    margin-bottom: 3rem;
    right: -49px;
  }
}
</style>
