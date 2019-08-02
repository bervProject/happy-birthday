<template>
  <v-container grid-list-xl>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1 class="display-1">My Wishes, You also can send your wishes!</h1>
          </v-card-title>

          <v-card-text>
            <h1 class="display-2">Once Again</h1>
            <h2 class="display-1">Happy Birthday
              <p class="green--text">Lita Vania Chrysilla</p>
            </h2>

            <p class="body-2">I hope today is your great day!</p>
            <p class="body-2">I hope Christ always increasing in you!</p>
            <p class="body-2">Day by day, more and more to love Christ!</p>
            <p class="body-2">I'm sorry if my word hurt you. I'm not mean to do that.</p>
            <p class="body-2">I hope you happy for now, tomorrow, and always!</p>
            <p class="body-2">Your happiness is our happiness.</p>
            <p class="body-2">Thank you be a part of my life. :)</p>
            <p class="body-2">Sincerely Yours,</p>
            <p class="body-2">Your Brother in Christ</p>
            <p class="body-2 green--text">Bervianto Leo Pratama</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-img :src="require('../assets/bday-112.gif')" contain height="200"></v-img>
      </v-flex>

      <v-flex xs12>
        <v-btn to="/" color="info">Back to Home</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
