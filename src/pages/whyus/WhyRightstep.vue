<template>
  <div>
    <div class="mb-5 mt-5" style="width: 100%">
      <h2 class="title-two">WHY RIGHT STEP?</h2>
      <p
        class="text-default text-center"
        style="max-width: 75rem; width: 100%; margin-inline: auto"
      >
        We provide a complete service for the sale, purchase or rental of real estate. We
        provide a complete We provide a complete service. We provide a complete service
        for the sale, purchase or rental of real estate.
      </p>
    </div>
    <div class="reasons">
      <div
        class="reas"
        v-for="(reason, index) in reasons"
        :key="reason.id"
        :class="{ reverse: index === 1 }"
      >
        <div class="details">
          <h2 class="title-two text-start">{{ reason.title }}</h2>
          <p class="text-default">{{ reason.description }}</p>
        </div>
        <div class="img">
          <img :src="reason.imgUrl" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const reasons = [
  {
    id: 1,
    title: "INVEST WITH CONFIDENCE",
    description:
      "The Real Estate Company has over twenty years of experience with embassies and large organisations in Yogyakarta. We are frequently referred to by former clients, and are therefore always looking for more properties.",
    imgUrl: "https://www.whatsoninmainz.com/wp-content/uploads/2017/05/properties2.jpg",
  },
  {
    id: 2,
    title: "A WIDE RANGE OF OPPORTUNITIES",
    description:
      "The Real Estate Company has over twenty years of experience with embassies and large organisations in Yogyakarta. We are frequently referred to by former clients, and are therefore always looking for more properties.",
    imgUrl:
      "https://i2.au.reastatic.net/800x600/2aa0f8a0746aee15daa89a0a87d1e1916079eca1fb31f06b2761648f60350a5e/image.jpg",
  },
  {
    id: 3,
    title: "MAKING A DIFFERENCE",
    description:
      "The Real Estate Company has over twenty years of experience with embassies and large organisations in Yogyakarta. We are frequently referred to by former clients, and are therefore always looking for more properties.",
    imgUrl:
      "https://i2.au.reastatic.net/800x600/34b8ad3c62e4b1a0406a63b38d666a0fd8c32e36c493c7b8e7187a33f40d42d3/main.jpg",
  },
];
</script>

<style scoped>
.reas {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 2rem;
}

.reas.reverse {
  flex-direction: row-reverse;
  gap: 30px;
}

.details {
  width: 50%;
}
.img {
  width: 50%;
}

img {
  width: 100%;
  height: 350px;
}

.title-two {
  font-size: 35px;
  font-weight: 800px;
}

@media (max-width: 1100px) {
  .reas {
    flex-direction: column;
  }
  .reas.reverse {
    flex-direction: column !important;
  }
  .details {
    width: 70% !important;
    text-align: center;
  }
  .details .title-two {
    text-align: center !important;
  }
  .img {
    width: 70% !important;
  }
}
@media (max-width: 800px) {
  .details {
    width: 100% !important;
    text-align: center;
  }
  .details .title-two {
    text-align: center !important;
  }
  .img {
    width: 100% !important;
  }
}
</style>
