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
      <td>{{ props.item.summary }}</td>
      <td>{{ props.item.status }}</td>
      <td>{{ props.item.timestamp | getHours }}</td>
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
import { briefsRef } from '@/firebase';

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
          { text: 'Age', sortable: false,value: 'age' },
          { text: 'Gender', sortable: false,value: 'gender' },
          
          { text: 'Problem',sortable: false, value: 'problem' },
          { text: 'Status',sortable: false, value: 'status' },
          { text: 'Time Remaining',sortable: false, value: 'timeRem' },
        ]
      }
    },
    firebase: {
      items: briefsRef
    },
    methods: {
      
    },
    filters: {
      getHours(timestamp){
        let now = Date.now()
        let diff = now - timestamp
        diff = Math.ceil(diff/(1000*60*60))   
        return diff >24 ?"Report delayed":(24-diff)+' hours'
      }
    }
  }
</script>
