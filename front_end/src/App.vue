<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </v-col>
        </v-row>
      </v-container>
      <router-view />
    </v-app>
  </div>
</template>
