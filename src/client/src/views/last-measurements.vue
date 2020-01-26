<template>
  <v-col cols="12" sm="6">
    <v-card class="pa-2" outlined tile>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Son Veri</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Tarih"
                v-model="data.date"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Saat"
                v-model="data.time"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" sm="3" md="3">
              <v-text-field
                label="Sıcaklık"
                :value="formatTemperature(data.temperature)"
                suffix="°C"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="6" sm="3" md="3">
              <v-text-field
                :value="formatTemperature(data.temperature_fahreheit, 1)"
                suffix="°F"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Nem"
                :value="data.humidity"
                prefix="%"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" sm="3" md="3">
              <v-text-field
                label="Sıcaklık Endeksi"
                :value="formatTemperature(data.hic, 2)"
                suffix="°C"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="6" sm="3" md="3">
              <v-text-field
                :value="formatTemperature(data.hif, 2)"
                suffix="°F"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</template>
<script>
import { db } from "@/db";
import moment from "moment";

export default {
  name: "last-measurement",
  data: () => ({
    data: {}
  }),
  mounted() {
    const table = db.ref("room_1_last");

    table.on("value", data => {
      //debugger;
      const d = { ...data.val(), key: data.key };
      d.date = moment(d.datetime).format("LL");
      d.time = moment(d.datetime).format("LTS");
      this.data = d;
    });
  },
  methods: {
    formatTemperature(v, b = 0) {
      var ratio = Math.pow(10, b);
      return Math.round(v * ratio) / ratio;
    }
  },
  computed: {
    temperature() {
      return `${this.data.temperature}\u00B0C ${this.data.temperature_fahreheit}\u00B0F`;
    }
  }
};
</script>