<template>
  <v-container grid-list-xl>
    <v-layout text-center row wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/lita-prof-pic.jpg')" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2">Happy Birthday!</h1>
        <h2 class="display-1">Lita Vania Chrysilla</h2>
      </v-flex>

      <v-flex xs12>
        <v-img :src="require('../assets/bday-112.gif')" contain height="200"></v-img>
      </v-flex>

      <v-flex xs12>
        <v-btn to="/memories" color="info">See Your Memories</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

