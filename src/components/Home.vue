<template>
  <div>
     <v-toolbar>
    <v-toolbar-title>Doct Koder</v-toolbar-title><v-spacer></v-spacer>
     <v-toolbar-items>
      <v-btn color="red darken-2 white--text">Emergency</v-btn>
    </v-toolbar-items>
  </v-toolbar>
   <v-content>
   
    <v-container fluid>
         <v-select
          :items="items"
          v-model="language"
          label="Select Language"
          single-line
          prepend-icon="language"
        ></v-select>
    
       <!-- <v-btn small @click="$router.push('Doctor')">Go</v-btn> -->
       <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">{{$t("home.diagnosis")}}</div>
                <div>{{$t("home.diagnosis_caption")}}</div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
          <v-btn flat dark @click="$router.push('Diagnosis')">
           
            {{$t("home.diagnosis_button")}}
             <v-icon>arrow_forward</v-icon>
          </v-btn>
              </v-card-actions>
            </v-card>

<br>
             <v-card color="red darken-2" class="white--text" raised>
              <v-card-title primary-title>
                <div class="headline">{{$t("home.emergency")}}</div>
                <div>{{$t("home.emergency_caption")}}</div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
          <v-btn flat dark>
          
            {{$t("home.emergency_button")}} 
             <v-icon>warning</v-icon>
             
          </v-btn>
              </v-card-actions>
            </v-card>
            <v-btn>Followup</v-btn>

    </v-container>
  </v-content>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js PWA",
       items: [
          { text: 'English', value: 'en'},         
          { text: 'Hindi ( हिंदी )', value: 'hi' },
          { text: 'Telegu ( తెలుగు )', value: 'te'},
          { text: 'Marathi (मराठी)', value: 'ma'}
        ],
        language: 'en'
    };
  },
  methods: {},
  watch: {
    language: function(newLanguage){
      this.$i18n.locale = newLanguage
      // console.log(newLanguage)
    }
  } 
};
</script>

<style>

</style>
