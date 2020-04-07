<template>
  <v-card>
    <v-tabs v-model="tab" background-color="#F05252" dark>
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        {
          tab: "A1-A2",
          content:
            "14€ Mes - Preparation and exercises for exam at Cambridge exam 15-May"
        },
        {
          tab: "B1",
          content:
            "14€ Mes - Preparation and exercises for exam at Cambridge exam 15-May"
        },
        {
          tab: "B2",
          content:
            "14€ Mes - Preparation and exercises for exam at Cambridge exam 15-May"
        },
        {
          tab: "C1",
          content:
            "14€ Mes - Preparation and exercises for exam at Cambridge exam 15-May"
        }
      ]
    };
  }
};
</script>
