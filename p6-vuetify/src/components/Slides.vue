<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="20">
        <v-carousel height="400">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://images.wallpaperscraft.com/image/pen_notebook_cell_formula_study_80658_3840x2400.jpg"
        },
        {
          src: "https://clueylearning.com.au/wp-content/uploads/2019/08/most-effective-way-to-study-according-to-science.jpg"
        },
        {
          src: "https://www.insidehighered.com/sites/default/server_files/media/iStock-520374378.jpg"
        },
        {
          src: "https://daily.sevenfifty.com/app/uploads/2018/08/SFD_TEXSOM_Self_Study2520x1420.jpg"
        }
      ]
    };
  }
};
</script>
