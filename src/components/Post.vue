<template>
  <v-card
    class="elevation-custom-2">
    <v-card-title primary-title>
        <v-layout row>
          <div class="post-avatar">
            <div class="post-badge">
              <img src="@/assets/facebook_small.svg" alt="">
            </div>
            <v-avatar
              tile="tile"
              size="37px"
            >
              <img
              src="@/assets/img/føtexLogo.png"
              alt="Føtex"
              >
            </v-avatar>
          </div>
          <v-flex
            grow
            pa-1    
          >
            <div class="post-brand-name">Føtex, Vejle </div>
            <div class="caption">Friday 22 sep. 4.30 PM </div>
          </v-flex>
          <div class="post-btn-more">
            <v-menu bottom left>
            <v-btn
              slot="activator"
              icon
            >
              <v-icon>more_vert</v-icon>
            </v-btn>

            <v-list>
              <v-list-tile
                v-for="(item, i) in items"
                :key="i"
                @click=""
              >
                <v-list-tile-icon>
                  <v-icon left>{{ item.icon }}</v-icon>
                </v-list-tile-icon>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          </div>
        </v-layout>
        <v-layout row>
          <v-flex class="post-caption"
            grow
            pa-1    
          >
            <div>Vi trækker én tilfældig vinder blandt de rigtige svar imorgen d. 22/12 kl. 14.00 Præmien er som I kan se på billedet. En kurv med en Oscar and, 2 gode flasker rødvin samt en Lindt chokolade julemand. &#x1F60D;</div>
          </v-flex>
        </v-layout>
    </v-card-title>
    
    <v-layout row>
      <v-flex
      class="post-image"
      v-for="img in imgs"
      :key="img.image"
      wrap >
        <v-img aspect-ratio="1.2" :src="img.image"></v-img>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex
      v-for="img in imgs2"
      :key="img.image"
      wrap >
        <v-img aspect-ratio="1.2" :src="img.image"></v-img>
      </v-flex>
    </v-layout>

    <v-card-actions style="height: 60px; position: relative">
      
      <v-btn
        class="post-btn-schedule"
        absolute
        large
        icon
        top
        right
        color="white"
      >
        <img src="@/assets/scheduleIconActive.svg" alt="">
      </v-btn>
      <!-- <v-btn flat icon color="orange">Delete</v-btn>
      <v-btn flat icon color="orange">Edit</v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: 'post',
  data: () => ({
      items: [
        { title: 'Delete', icon: 'delete_outline' },
        { title: 'Copy', icon: 'file_copy' }
      ],
      imgs: [
        { image: require('@/assets/img/føtex2.jpg') },
        { image: require('@/assets/img/føtex3.jpg') }
      ],
      imgs2: [
        { image: require('@/assets/img/føtex4.jpg') },
        { image: require('@/assets/img/føtex5.jpg') },
        { image: require('@/assets/img/føtex6.jpg') }
      ]
    })
}
</script>

<style lang="scss" scoped>
  .list-view {
    .post-image{
        /* padding: 2px !important;
        :first-child {
          padding-left: 0px !important;
        } */
    }
    .layout.row {
      div {
        padding: 1px !important;
      }
      :first-child {
          padding-left: 0px !important;
        }
      :last-child {
          padding-right: 0px !important;
        }
    }
    .post-avatar {
        width: 54px;
        .post-badge {
          img {
            width: 18px;
            height: 18px;
            border-radius: 9px;
            background-color: aqua;
            position: absolute;
            z-index: 1;
            left: 43px;
            top: 12px;
            border: 2px solid #FFFFFF;
          }
        }
        .v-avatar--tile {
          position: relative;
          top: 3px;
          img {
            border-radius: 2px !important;
          }
        }
    }
    .post-btn-more {
        .v-icon {
          color: #d6dcdf;
        }
        width: 30px;
        position: relative;
        top: -6px;
        right: 5px;
    }
    .post-brand-name {
      font-size: 16px !important;
      font-weight: 600 !important;
      color: #2d2f39 !important;
    }
    .post-caption {
      margin-top: 10px;
      margin-bottom: 6px;
      font-size: 16px;
      line-height: 1.5;
      color: #2d2f39;
      font-weight: 400;
    }
    .v-card__title--primary {
      padding-top: 16px;
    }
    .subheading {
      font-weight: 600;
    }
    .caption {
      font-size: 13px !important;
      color: #637178;
      font-weight: 500;
      margin-top: -1px;
    }
    .v-card__actions {
      .post-btn-schedule {
      width: 70px;
      height: 70px;
      border-radius: 35px;
      top: -18px !important;
      /* :hover {
        -webkit-box-shadow: 0 30px 40px 0 rgba(12,20,39,.1) !important;
        box-shadow: 0 30px 40px 0 rgba(12,20,39,.1) !important;
        } */
      }
      .v-btn--active:before, .v-btn:hover:before, .v-btn:focus:before {
        /* -webkit-box-shadow: 0 30px 40px 0 rgba(12,20,39,.6) !important;
        box-shadow: 0 30px 40px 0 rgba(12,20,39,.6) !important; */
        background-color: #afb8bc;
      }
    }
  }
</style>
