<template>
  <div class="professional-services mt-5 text-center">
    <div class="section_title mb-5">
      <span class="title-one">Why Choose Us</span>
      <h2 class="title-two">Professional Services</h2>
    </div>
    <div class="services d-flex flex-wrap" style="gap: 26px">
      <service-card v-for="service in services" ::key="services.id">
        <template #service-img>
          <!-- <img :src="service.imgUrl" alt="..." /> -->
          <img
            src="../../assets/professional-sevices/professional-services-1.png"
            alt="..."
          />
        </template>
        <template #service-title>
          <h5 class="card-title">{{ service.title }}</h5>
        </template>
        <template #service-text>
          <p class="card-text title-four">
            {{ service.description }}
          </p>
        </template>
      </service-card>
    </div>
  </div>
</template>
<script setup>
const services = [
  {
    id: "1",
    imgUrl: "../../assets/professional-sevices/professional-services-1.png",
    title: "Islamabad",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    id: "2",
    imgUrl: "../../assets/professional-sevices/professional-services-2.png",
    title: "Multan",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    id: "3",
    imgUrl: "../../assets/professional-sevices/professional-services-3.png",
    title: "Peshawar",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    id: "4",
    imgUrl: "../../assets/professional-sevices/professional-services-4.png",
    title: "Lahore",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
];
</script>

<style scoped>
@media (max-width: 1400px) {
  .services {
    margin-inline: auto;
  }
}
@media (max-width: 1200px) {
  .services {
    justify-content: center;
  }
}
</style>
