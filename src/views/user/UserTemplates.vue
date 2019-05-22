<template>
  <div>
    <v-container>
      <div class="user-create">

        <v-layout row wrap>
          <v-flex>
            <v-subheader>Images</v-subheader>
          </v-flex>
          <v-flex>
            <div class="v-subheader-more float-right">Show all</div>
          </v-flex>
        </v-layout>

        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs6 sm3 md3 lg2>
              <v-card flat hover>
                <v-img aspect-ratio="1.2" :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`" ></v-img>
                <!-- <v-card-actions>
                  <v-btn flat icon color="lightgrey"></v-btn>
                </v-card-actions> -->
              </v-card>
              
            </v-flex>
          </v-layout>
        </v-container>
        <v-layout row wrap>
          <v-flex>
            <v-subheader>Videos</v-subheader>
          </v-flex>
          <v-flex>
            <div class="v-subheader-more float-right">Show all</div>
          </v-flex>
        </v-layout>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs6 sm3 md3 lg2>
              <v-card flat hover>
                <v-img aspect-ratio="1.2" :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`" ></v-img>
               <!--  <v-card-actions>
                  <v-btn flat icon color="lightgrey"></v-btn>
                </v-card-actions> -->
              </v-card>
              
            </v-flex>
          </v-layout>
        </v-container>
        <v-layout row wrap>
          <v-flex>
            <v-subheader>Design</v-subheader>
          </v-flex>
          <v-flex>
            <div class="v-subheader-more float-right">Show all</div>
          </v-flex>
        </v-layout>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs6 sm3 md3 lg2>
              <v-card flat hover>
                <v-img aspect-ratio="1.2" :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`" ></v-img>
                <!-- <v-card-actions>
                  <v-btn flat icon color="lightgrey"></v-btn>
                </v-card-actions> -->
              </v-card>
        
            </v-flex>
          </v-layout>
        </v-container>

        <v-layout row wrap>
          <v-flex>
            <v-subheader>Text</v-subheader>
          </v-flex>
          <v-flex>
            <div class="v-subheader-more float-right">Show all</div>
          </v-flex>
        </v-layout>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs6 sm3 md3 lg2>
              <v-card flat hover>
                <v-img aspect-ratio="1.2" :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`" ></v-img>
                <!-- <v-card-actions>
                  <v-btn flat icon color="lightgrey"></v-btn>
                </v-card-actions> -->
              </v-card>
        
            </v-flex>
          </v-layout>
        </v-container>
    </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'usertemplates'
}
</script>

<style lang="scss" scoped>
  .user-create {
    .v-card {
      padding: 4px !important;
      .v-card__actions {
        height: 30px !important;
      }
    }
  }
</style>




