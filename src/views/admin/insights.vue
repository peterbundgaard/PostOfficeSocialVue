<template>
  <div>
    <v-container class="admin-insights-view">
      <v-layout class="ViewHeader" wrap>
        <v-flex
        sm4
        xs12
        class="text-sm-left text-xs-center"
      >
        <div class="headline2">Insights</div>
      </v-flex>
      <v-flex
        sm1
        xs12
        class="text-xs-center"
      >
      </v-flex>

      <v-flex
        sm7
        xs12
        class="text-sm-right text-xs-center center"
      >
        <div class="inline-action">
          <v-btn block class="large-btn no-margin-btn" flat color="primary" large>Export <v-icon right>save_alt</v-icon></v-btn>
        </div>
        <div class="inline-action">
          <v-select
          v-model="type"
          :items="typeOptions"
          label="Solo field"
          solo
          flat=""
          outline
        ></v-select>
        </div>
        <!-- <div class="inline-action">
          <v-select
          v-model="type"
          :items="typeOptions"
          label="Solo field"
          solo
          flat=""
          outline
        >
        
        </v-select>
        </div> -->
        <div class="inline-action">
          <v-select
          class="margin-top-select"
            v-model="selectedFruits"
            :items="fruits"
            label="All posts"
            multiple
            outline
            flat
            single-line
          >
            <v-list-tile
              slot="prepend-item"
              ripple
              @click="toggle"
            >
              <v-list-tile-action>
                <v-icon :color="selectedFruits.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Select All</v-list-tile-title>
            </v-list-tile>
            <v-divider
              slot="prepend-item"
              class="mt-2"
            ></v-divider>
          </v-select>
        </div>
        

      </v-flex>

      
    </v-layout>

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
  name: 'insights',
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
      ],
      type: '4day',
      typeOptions: [
        { text: 'Last 7 days', value: 'day' },
        { text: 'Last 28 days', value: '4day' },
        { text: 'Last 90 days', value: 'week' },
        { text: 'Alltime', value: 'month' },
        { text: 'Custom', value: 'custom-daily' }
      ],
        fruits: [
          'Post Office', 'Facebook', 'Instagram'
        ],
         selectedFruits: []
    }),
    computed: {
      icon () {
        if (this.likesAllFruit) return 'mdi-close-box'
        if (this.likesSomeFruit) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline'
      }
    },
    methods: {
      toggle () {
        this.$nextTick(() => {
          if (this.likesAllFruit) {
            this.selectedFruits = []
          } else {
            this.selectedFruits = this.fruits.slice()
          }
        })
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
