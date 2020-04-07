<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Slides msg="Welcome to Your Vue.js App" />
    <Calendar msg="Es un calendario" />
    <Prices msg="Los precios" />
  </div>
</template>

<script>
// @ is an alias to /src
import Slides from "@/components/Slides.vue";
import Calendar from "@/components/Calendar.vue";
import Prices from "@/components/Prices.vue";

export default {
  name: "Home",
  components: {
    Slides,
    Calendar,
    Prices
  }
};
</script>
