<template>
  <div>
    <v-container>
      <v-row>
        <last-measurements></last-measurements>
        <graphics1 :value="data"></graphics1>
      </v-row>
    </v-container>
    <v-card class="mx-auto">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            Zamansal Veriler
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-data-table
            :headers="headers"
            :items="data"
            :items-per-page="10"
            class="elevation-1"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            multi-sort
          >
            <template v-slot:item.datetime="{ item }">
              {{ formatDate(item.datetime) }}
            </template>
          </v-data-table>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { db } from "@/db";
import moment from "moment";
import LastMeasurements from "./last-measurements";
import Graphics1 from "./graphics1";

export default {
  name: "home",
  components: {
    "last-measurements": LastMeasurements,
    graphics1: Graphics1
  },
  data: () => ({
    data: [],
    sortBy: ["datetime"],
    sortDesc: [true],
    headers: [
      {
        text: "Date & Time",
        align: "center",
        sortable: true,
        value: "datetime"
      },
      { text: "Humidity", value: "humidity" },
      { text: "Temperature(*C)", value: "temperature" },
      { text: "Temperature(*F)", value: "temperature_fahreheit" },
      { text: "Heat Index(*C)", value: "hic" },
      { text: "Heat Index(*F)", value: "hif" }
    ]
  }),
  mounted() {
    const table = db
      .ref("room_1")
      .orderByChild("datetime")
      .limitToLast(10);

    // this.$rtdbBind(
    //   "documents",
    //   db.ref("room_1").orderByChild("datetime")
    //   //.startAt(200)
    // );
    // table.once("value", snapshot => {
    //   this.data = snapshot;
    // });
    table.on("child_added", data => {
      //debugger;
      const d = { ...data.val(), key: data.key };
      d.date = moment(d.datetime).format("LL");
      d.time = moment(d.datetime).format("LTS");
      d.datetimeFormated = moment(d.datetime).format("LLL");
      this.data.push(d);
    });
    //   .then(d => (this.data = d));
  },
  // computed: {
  //   measurements: {
  //     get() {
  //       return db.ref("room_1").orderByChild("datetime");
  //     }
  //   }
  // }
  methods: {
    formatDate(value) {
      return moment(value).format("LLL");
    }
  }
  // firebase: {
  //   data: db
  //     .ref("room_1")
  //     .orderByChild("datetime")
  //     .limitToLast(10)
  // }
};
</script>
