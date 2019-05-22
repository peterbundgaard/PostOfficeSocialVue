<template>
  <v-container class="admin-user-view">
    
    <v-layout class="ViewHeader" wrap>
        <v-flex
        sm4
        xs12
        class="text-sm-left text-xs-center"
      >
        <div class="headline2">Locations</div>
      </v-flex>
      <v-flex
        sm4
        xs12
        class="text-xs-center"
      >
      </v-flex>

      <v-flex
        sm4
        xs12
        class="text-sm-right text-xs-center center"
      >
        <div class="inline-action float-right">
          <v-btn block class="large-btn no-margin-btn" depressed color="primary" outline large>
            <v-icon left>add</v-icon>
            Create new</v-btn>
        </div>
        

      </v-flex>

      
    </v-layout>
    
    <v-card flat hover>
      <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :pagination.sync="pagination"
      select-all
      item-key="name"
      class="dataTableRounded"
    >
      <template slot="headers" slot-scope="props">
        <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.native="toggleAll"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox
              :input-value="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.active }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
          <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            person_add
          </v-icon>
        </td>
        </tr>
      </template>
    </v-data-table>
    </v-card>

    
    <v-layout class="ViewHeader" wrap>
        <v-flex
        sm4
        xs12
        class="text-sm-left text-xs-center"
      >
        <div class="headline2">Users</div>
      </v-flex>
      <v-flex
        sm4
        xs12
        class="text-xs-center"
      >
      </v-flex>

      <v-flex
        sm4
        xs12
        class="text-sm-right text-xs-center center"
      >
        <div class="inline-action float-right">
          <v-btn block class="large-btn no-margin-btn" depressed color="primary" outline large>
            <v-icon left>person_add</v-icon>
            Invite</v-btn>
        </div>
        

      </v-flex>

      
    </v-layout>
    
    <v-card flat hover>
      <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :pagination.sync="pagination"
      select-all
      item-key="name"
      class="dataTableRounded"
    >
      <template slot="headers" slot-scope="props">
        <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.native="toggleAll"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox
              :input-value="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.active }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
          <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
        </tr>
      </template>
    </v-data-table>
    </v-card>



    <v-layout class="ViewHeader" wrap>
        <v-flex
        sm4
        xs12
        class="text-sm-left text-xs-center"
      >
        <div class="headline2">Groups</div>
      </v-flex>
      <v-flex
        sm4
        xs12
        class="text-xs-center"
      >
      </v-flex>

      <v-flex
        sm4
        xs12
        class="text-sm-right text-xs-center center"
      >
        <div class="inline-action float-right">
          <v-btn block class="large-btn no-margin-btn" depressed color="primary" outline large>
            <v-icon left>add</v-icon>
            New group</v-btn>
        </div>
        

      </v-flex>

      
    </v-layout>
    
    <v-card flat hover>
      <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :pagination.sync="pagination"
      select-all
      item-key="name"
      class="dataTableRounded"
    >
      <template slot="headers" slot-scope="props">
        <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.native="toggleAll"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox
              :input-value="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.active }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
          <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
        </tr>
      </template>
    </v-data-table>
    </v-card>
    


    

    
  </v-container>

  
</template>

<script>
  export default {
    name: 'calendar',
    data: () => ({
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      headers: [
        {
          text: 'Navn',
          align: 'left',
          value: 'name'
        },
        { text: 'Aktiv', value: 'active' },
        { text: 'Opslag', value: 'fat' },
        { text: 'Følgere', value: 'carbs' },
        { text: 'Rækkevidde', value: 'protein' },
        { text: 'Interaktion', value: 'iron' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      desserts: [
        {
          value: false,
          name: 'Post Office Vesterbro',
          active: 'I dag',
          fat: 638,
          carbs: 4.638,
          protein: 34.098,
          iron: 2.341,
        },
        {
          value: false,
          name: 'Post Office Østerbro',
          active: '2 uger siden',
          fat: 638,
          carbs: 4.638,
          protein: 34.098,
          iron: 2.341,
        },
        {
          value: false,
          name: 'Post Office Nørrebro',
          active: '2 uger siden',
          fat: 638,
          carbs: 4.638,
          protein: 34.098,
          iron: 2.341,
        },
        {
          value: false,
          name: 'Post Office Holbæk',
          active: 'I går',
          fat: 638,
          carbs: 4.638,
          protein: 34.098,
          iron: 2.341,
        },
        {
          value: false,
          name: 'Post Office Varde',
          active: '2 uger siden',
          fat: 638,
          carbs: 4.638,
          protein: 34.098,
          iron: 2.341,
        },
        {
          value: false,
          name: 'Post Office Esbjerg',
          active: '1 uge siden',
          fat: 638,
          carbs: 4.638,
          protein: 34.098,
          iron: 2.341,
        },
        {
          value: false,
          name: 'Post Office Viborg',
          active: '2 uger siden',
          fat: 638,
          carbs: 4.638,
          protein: 34.098,
          iron: 2.341,
        },
        {
          value: false,
          name: 'Post Office Faxe',
          active: '3 dage siden',
          fat: 638,
          carbs: 4.638,
          protein: 34.098,
          iron: 2.341,
        },
        {
          value: false,
          name: 'Post Office Virum',
          active: '1 uge siden',
          fat: 638,
          carbs: 4.638,
          protein: 34.098,
          iron: 2.341,
        },
        {
          value: false,
          name: 'Post Office Odense',
          active: '1 time siden',
          fat: 638,
          carbs: 4.638,
          protein: 34.098,
          iron: 2.341,
        }
      ]
    }),

    methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.desserts.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.admin-user-view {
  .v-card {
    margin-bottom: 140px;
  }
}
</style>
