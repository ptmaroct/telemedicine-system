<template>
  <div>
      <v-toolbar>
    <v-toolbar-title>Welcome to Assistant Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="$router.push({name: 'assistantchat'})">Goto Chat</v-btn> <v-btn flat disabled>Assistant 14</v-btn>
  </v-toolbar>

  <v-container>
      <div class="headline">Previous Records</div>
      <v-card>
    <v-card-title>
      
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
        <v-data-table
    :headers="headers"
    :items="items"
    :search="search"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.mobile }}</td>
      <td>{{ props.item.age }}</td>
      <td>{{ props.item.gender }}</td>
      <td>{{ props.item.problem }}</td>
    </template>
    <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
  </v-data-table> 
      </v-card>         
  </v-container>
  </div>
</template>

<script>
export default {
    data () {
      return {
          search: '',
        headers: [
          {
            text: 'Name',
            sortable: false,
            value: 'name'
          },
          { text: 'Mobile No.',sortable: false, value: 'mobile' },
          { text: 'Gender', sortable: false,value: 'gender' },
          { text: 'Age', sortable: false,value: 'age' },
          { text: 'Problem',sortable: false, value: 'problem' },
        ],
        items: [
          {
            value: false,
            name: 'Anuj Sharma',
            mobile: '9810440729',
            gender: 'male',
            age: '21',
            problem: 'something'
          },
          {
            value: false,
            name: 'Gaurav',
            mobile: '9811440729',
            gender: 'male',
            age: '20',
            problem: 'something else'
          },
          {
            value: false,
            name: 'Lakshya Tyagi',
            mobile: '9810442229',
            gender: 'male',
            age: '21',
            problem: 'cancer'
          }
        ]
      }
    }
  }
</script>
