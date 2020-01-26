<template>
  <v-col cols="12" sm="6">
    <v-card class="pa-2" outlined tile>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Grafik</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <line-chart :data="chartData"></line-chart>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</template>
<script>
//import { db } from "@/db";
import moment from "moment";

export default {
  name: "graphics1",
  props: ["value"],
  data: () => ({
    // chartData: [
    //   {
    //     name: "Seri 1",
    //     data: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]
    //   },
    //   {
    //     name: "Seri 2",
    //     data: [["Jan", 1], ["Feb", 5], ["Mar", 3], ["Apr", 8], ["May", 11]]
    //   }
    // ]
  }),
  mounted() {},
  computed: {
    chartData() {
      const before5Minutes = +moment().subtract(15, "m");
      const d = this.value.filter(x => x.datetime >= before5Minutes);
      //.sort((a, b) => b.datetime - a.datetime)
      //.filter((item, i) => i < 10)
      return [
        {
          name: "Sıcaklık °C",
          data: d.map(x => [x.time, x.temperature])
        },
        {
          name: "Nem %",
          data: d.map(x => [x.time, x.humidity])
        }
      ];
    }
  }
};
</script>