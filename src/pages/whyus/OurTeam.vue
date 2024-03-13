<template>
  <div class="mt-5 mb-5 text-center">
    <div class="section_title mb-5">
      <h2 class="title-two">Our Team</h2>
    </div>
    <div class="team d-flex flex-wrap" style="gap: 15px">
      <service-card v-for="member in members" ::key="member.id">
        <template #service-img>
          <img :src="member.imgUrl" alt="..." />
          <!-- <img
            src="../../assets/professional-sevices/professional-services-1.png"
            alt="..."
          /> -->
        </template>
        <template #service-title>
          <h5 class="card-title">{{ member.name }}</h5>
        </template>
        <template #service-text>
          <p class="card-text title-four">
            {{ member.status }}
          </p>
        </template>
      </service-card>
    </div>
  </div>
</template>
<script setup>
const members = [
  {
    id: "1",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Nine",
    status: " Developer",
  },
  {
    id: "2",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Sumail",
    status: " Developer",
  },
  {
    id: "3",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Ameer al Barkavi",
    status: " Developer",
  },
  {
    id: "4",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Topson",
    status: " Developer",
  },
];
</script>

<style scoped>
img{
    width: 100%;
}

@media (max-width: 1400px) {
  .team {
    justify-content: center;
  }
} 
</style>
