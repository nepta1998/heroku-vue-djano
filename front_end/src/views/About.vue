<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col cols="12">
        <h1 class="primary--text display-4">JSON</h1>
      </v-col>
      <v-col cols="12" v-if="!data">
        <v-sheet class="px-3 pt-3 pb-12" v-for="n in numbers" :key="n">
          <v-skeleton-loader
            class="mx-auto"
            type="list-item-two-line"
          ></v-skeleton-loader>
        </v-sheet>
      </v-col>
      <v-col v-for="(item, i) in data" :key="i" cols="12" v-else>
        <v-card color="blue" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="headline"
                v-text="item.subject"
              ></v-card-title>
              <v-card-subtitle v-text="item.body"></v-card-subtitle>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Api from "../service/api";
export default {
  name: "About",

  data: () => ({
    data: null,
    numbers: [1, 2, 3, 4, 5 ,7,8,9,10]
  }),
  created() {
    Api.getAll()
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }
};
</script>
