<template>
  <v-app>
    <v-app-bar app color="#F05252" dark>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <div class="d-flex align-center">
        <v-img
          alt="App Logo"
          class="shrink mr-2"
          contain
          src="./images/logo-leon.png"
          transition="scale-transition"
          width="75"
        />
        <h2>Lions English Academy</h2>
      </div>
    </v-app-bar>

    <v-content>
      <Slides />
      <Calendar />
      <Prices />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Slides from "./components/Slides.vue";
import Calendar from "./components/Calendar.vue";
import Prices from "./components/Prices.vue";

export default Vue.extend({
  name: "App",

  components: {
    Slides,
    Calendar,
    Prices
  },

  data: () => ({
    //
  })
});
</script>
