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
      <v-col cols="12">
        <v-btn small color="primary" @click="createDocument()"
          >Inicializar</v-btn
        >
      </v-col>
      <v-col cols="12">
        <v-btn small color="primary" @click="login()">login</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn small color="primary" @click="logout()">logout</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn small color="primary" @click="create()">crear</v-btn>
      </v-col>
      <v-col cols="12" v-if="url">
        <v-card color="blue" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">{{ url }}</v-card-title>
            </div>
          </div>
        </v-card>
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
  data() {
    return {
      data: null,
      numbers: [1, 2, 3, 4, 5, 7, 8, 9, 10],
      CLIENT_ID:
        "1038154514425-t7uob4112vsfds1jpgkl5r99adppb0ab.apps.googleusercontent.com",
      DISCOVERY_DOCS: [
        "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"
      ],
      API_KEY: "AIzaSyDQfm9sClm-5UZTQ_vy2zYZUCJ5OAjOsBg",
      SCOPES:
        "https://www.googleapis.com/auth/drive.appdata" +
        " " +
        "https://www.googleapis.com/auth/drive" +
        " " +
        "https://www.googleapis.com/auth/drive.file" +
        " " +
        "https://www.googleapis.com/auth/drive.appdata",
      originFileId: "19aPs4_Dxw3DuoSwjVr_21_V7r41IrX0tnLF4fyvPbNs",
      url: null
    };
  },
  created() {
    Api.getAll()
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error.response.data);
      });
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    async createDocument() {
      await gapi.load("client", () => {
        console.log("Auth2 Loaded");
        gapi.client.init({
          apiKey: this.API_KEY,
          clientId: this.CLIENT_ID,
          discoveryDocs: this.DISCOVERY_DOCS,
          scope: this.SCOPES
        });
        gapi.client.load("drive", "v3", () => console.log("loaded drive"));
      });
    },
    handleAuthResult(authResult) {
      console.log("Handle Auth result");
      if (authResult && !authResult.error) {
        this.oauthToken = authResult.access_token;
        console.log(authResult);
      }
    },
    updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        console.log("si esta ----");
      } else {
        console.log("no esta ----");
      }
    },
    async logout() {
      gapi.auth2.getAuthInstance().signOut();
    },
    async login() {
      const googleAuth = gapi.auth2.getAuthInstance();
      const googleUser = await googleAuth.signIn();
      const token = googleUser.getAuthResponse().id_token;
      console.log(googleUser);
      console.log(token);
    },
    create: async function() {
      const body = {name: "LO LOGREEEEEEEE"};
      const request = await gapi.client.drive.files.copy({
        fileId: this.originFileId,
        resource: body
      });
      const id = request.result.id;
      console.log(id);
      this.url = `https://docs.google.com/document/d/${id}/edit`;
    }
  }
};
</script>
