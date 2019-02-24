<template>
  <div>
    <v-container>
      <v-btn
          class="btnLeft" 
          @click="$refs.calendar.prev()"
          fab
          dark
          small>
          <v-icon dark>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn
          class="btnRight" 
          @click="$refs.calendar.next()"
          fab
          dark
          small>
          <v-icon dark>keyboard_arrow_right</v-icon>
        </v-btn>
    
      <v-layout wrap>
        <v-flex
        sm4
        xs12
        class="text-sm-left text-xs-center"
      >
        <div class="headline">Februar</div>
      </v-flex>
      <v-flex
        sm4
        xs12
        class="text-xs-center"
      >
      </v-flex>

      <v-flex
        sm2
        xs12
        class="text-sm-right text-xs-center"
      >
        <v-select
          v-model="type"
          :items="typeOptions"
          label="Solo field"
          solo
        ></v-select>
      </v-flex>

      <v-flex
        sm2
        xs12
        class="text-sm-right text-xs-center"
      >
        <v-btn large>New Post</v-btn>
          
      </v-flex>
      <v-flex
        xs12
        class="mb-3"
      >
        <v-sheet height="1100">
          <v-calendar
            ref="calendar"
            v-model="start"
            :type="type"
            :end="end"
            color="primary"
          ></v-calendar>
        </v-sheet>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  data: () => ({
      type: 'week',
      start: '2019-02-17',
      end: '2019-02-23',
      typeOptions: [
        { text: 'Day', value: 'day' },
        { text: '4 Day', value: '4day' },
        { text: 'Week', value: 'week' },
        { text: 'Month', value: 'month' },
        { text: 'Custom Daily', value: 'custom-daily' },
        { text: 'Custom Weekly', value: 'custom-weekly' }
      ]
    })
}
</script>

<style lang="scss" scoped>

.btnLeft {
  position: fixed;
  z-index: 1;
  top: 400px;
  right: 0px;
  left: 224px;
  opacity: 0.4;
}
.btnRight {
  position: fixed;
  z-index: 1;
  top: 400px;
  right: 0px;
  opacity: 0.4;
}

.btnLeft:hover {
  opacity: 1;
}

@media (max-width: 959px) { 
  .btnLeft {
  left: 10px;
  }
 }

.btnRight:hover {
  opacity: 1;
}

</style>

