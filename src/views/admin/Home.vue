<template>
  <div>
    <v-container >
      <div class="ViewHeader">
        <div class="headline2">Hi, {{ currentUser.displayName }}</div>
        <div class="body-1">Her kan man skrive en tagline</div>
      </div>

      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 mb-4>
            <v-card 
              pa-3
              flat 
              hover
            >
              <v-card-text>
                
                <div class="headline3 font-dark mt-2 ml-3">Posts</div>
                <div class="caption font-grey ml-3">1. january - 28. january</div>
                <div class="spot ml-3 mt-2">240</div>
              </v-card-text>
              <v-sparkline
                  :value="value"
                  color="#1089f9"
                  line-width="2.5"
                  padding="20"
                   auto-draw="true"
                  auto-draw-duration="1500"
                ></v-sparkline>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md4 mb-4>
            <v-card 
              pa-3
              flat 
              hover
            >
              <v-card-text>
                
                <div class="headline3 font-dark mt-2 ml-3">Impressions</div>
                <div class="caption font-grey ml-3">1. january - 28. january</div>
                <div class="spot ml-3 mt-2">388.976</div>
              </v-card-text>
              <v-sparkline
                  :value="value"
                  color="#1089f9"
                  line-width="2.5"
                  padding="20"
                   auto-draw="true"
                  auto-draw-duration="1500"
                ></v-sparkline>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md4 mb-4>
            <v-card 
              pa-3
              flat 
              hover
            >
              <v-card-text>
                
                <div class="headline3 font-dark mt-2 ml-3">Engagement</div>
                <div class="caption font-grey ml-3">1. january - 28. january</div>
                <div class="spot ml-3 mt-2">46.876</div>
              </v-card-text>
              <v-sparkline
                  :value="value"
                  color="#1089f9"
                  line-width="2.5"
                  padding="20"
                   auto-draw="true"
                  auto-draw-duration="1500"
                ></v-sparkline>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md4 mb-4>
            <v-card 
              pa-3
              flat 
              hover
            >
              <v-card-text>
                
                <div class="headline3 font-dark mt-2 ml-3">Content type</div>
                <div class="caption font-grey ml-3">1. january - 28. january</div>
                <div class="spot ml-3 mt-2">240</div>
              </v-card-text>
              <v-sparkline
                  :value="value"
                  type="bars"
                  color="#1089f9"
                  line-width="20"
                   auto-draw="true"
                  auto-draw-duration="1500"
                ></v-sparkline>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md4 mb-4>
            <v-card 
              pa-3
              flat 
              hover
            >
              <v-card-text>
                
                <div class="headline3 font-dark mt-2 ml-3">Active users</div>
                <div class="caption font-grey ml-3">1. january - 28. january</div>
                <div class="spot ml-3 mt-2">60%</div>
              </v-card-text>
              <v-sparkline
                  :value="value"
                  color="#1089f9"
                  line-width="2.5"
                  padding="20"
                   auto-draw="true"
                  auto-draw-duration="1500"
                ></v-sparkline>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md4 mb-4>
            <v-card 
              pa-3
              flat 
              hover
            >
              <v-card-text>
                
                <div class="headline3 font-dark mt-2 ml-3">Avg. post/location</div>
                <div class="caption font-grey ml-3">1. january - 28. january</div>
                <div class="spot ml-3 mt-2">19</div>
              </v-card-text>
              <v-sparkline
                  :value="value"
                  color="#1089f9"
                  line-width="2.5"
                  padding="20"
                   auto-draw="true"
                  auto-draw-duration="1500"
                ></v-sparkline>
            </v-card>
          </v-flex>
          

        </v-layout>
      </v-container>
      
    </v-container>
  </div>
</template>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: mapState(['currentUser']),
  data: () => ({
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm'
      ],
      value: [
        310,
        675,
        410,
        390,
        310,
        460,
        250,
        240
      ]
    })
}
</script>
