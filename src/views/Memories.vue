<template>
  <v-container fluid grid-list-xl>
    <v-layout row text-center wrap>
      <v-flex xs12>
        <h1 class="display-3">Your Memories</h1>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/lita-memory-1.jpg')" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <v-card-text>
              <h1 class="headline text-xs-center">Bachelor Degree Graduate</h1>
              <h2 class="subheading text-xs-center">
                Btw, Congratulations!
                I'm so sorry not come. :(
              </h2>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/lita-memory-2.jpg')" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <v-card-text>
              <h1 class="headline">At Kawah Putih</h1>
              <h2 class="subheading">This is after blending in the end of last year.</h2>
              <h2 class="subheading">Don't know why I want to place this photo here. :p</h2>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/lita-memory-3.jpg')" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <v-card-text>
              <h1 class="headline">Your Birthday in 3 Years Ago</h1>
              <h2 class="subheading">
                I just have this photo from your Facebook.
                I don't have another last year photo. :(
              </h2>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/lita-memory-4.jpg')" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <v-card-text>
              <h1 class="headline">Some of sister's time (?)</h1>
              <h2 class="subheading">
                I just pick up anything that
                I think catchy to be placed here.
              </h2>
              <h2 class="subheading">This is good pose anyway!</h2>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/lita-memory-5.jpg')" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <v-card-text>
              <h1 class="headline">Welcome Dinner in Jatinangor</h1>
              <h2 class="subheading">
                I not remember when,
                I just remember that some years ago.
              </h2>
              <h2 class="subheading">Again, I pick a photo that I think a catchy photo!</h2>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/lita-memory-6.jpg')" aspect-ratio="2.10"></v-img>
          <v-card-title primary-title>
            <v-card-text>
              <h1 class="headline">Long Time Ago</h1>
              <h2 class="subheading">
                I remember this,
                this is before Kak Nova get married and we take a photo together!
              </h2>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/lita-memory-7.jpg')" aspect-ratio="1.75"></v-img>
          <v-card-title primary-title>
            <v-card-text>
              <h1 class="headline">Some of Your Photo</h1>
              <h2 class="subheading">I like this photo, btw. :p</h2>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/lita-memory-8.jpg')" aspect-ratio="1.75"></v-img>
          <v-card-title primary-title>
            <v-card-text>
              <h1 class="headline">With Your Brother & Sister</h1>
              <h2 class="subheading">This is pretty photo. You're all cute. :D</h2>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/lita-memory-9.jpg')" aspect-ratio="1.5"></v-img>
          <v-card-title primary-title>
            <v-card-text>
              <h1 class="headline">Your Family Photo</h1>
              <h2
                class="subheading"
              >I can't say much about this photo. But I think this is good photo to place here.</h2>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md4>
        <v-card>
          <v-img :src="require('../assets/lita-memory-10.jpg')" aspect-ratio="1.5"></v-img>
          <v-card-title primary-title>
            <v-card-text>
              <h1 class="headline">With Brother & Sister in Christ from Bandung</h1>
              <h2 class="subheading">
                This is last photo here.
                I can't attach as much as your memory.
              </h2>
              <h2 class="subheading">
                I just want to bring you some moment that
                maybe will remember you to something.
              </h2>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-img :src="require('../assets/bday-159.gif')" contain height="300"></v-img>
      </v-flex>

      <v-flex xs12>
        <v-btn to="/words" color="info">This is For You</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
