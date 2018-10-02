<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Facebook Post</h3>
                <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange">Delete</v-btn>
              <v-btn flat color="orange">Edit</v-btn>
            </v-card-actions>
          </v-card>
          
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'userhome',
  computed: mapState(['currentUser'])
}
</script>
