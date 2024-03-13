<template>
  <div class="professional-services mt-5 mb-5 text-center">
    <div class="section_title mb-5">
      <h2 class="title-two">Explore our commercial real estate services</h2>
    </div>
    <div class="commercial d-flex flex-wrap" style="gap: 26px">
      <service-card v-for="service in services" ::key="services.id" >
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
  },
  {
    id: "2",
    imgUrl: "../../assets/professional-sevices/professional-services-2.png",
    title: "Multan",
  },
  {
    id: "3",
    imgUrl: "../../assets/professional-sevices/professional-services-3.png",
    title: "Peshawar",
  },
  {
    id: "4",
    imgUrl: "../../assets/professional-sevices/professional-services-4.png",
    title: "Lahore",
  },
];
</script>

<style scoped>
.commercial{
  justify-content: center;
}

</style>
