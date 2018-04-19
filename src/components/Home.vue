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
                <div class="headline">{{$t("home.diagnosis")}}</div> <br>
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
             <v-card color="green darken-2" class="white--text" raised>
              <v-card-title primary-title>
                <div class="headline">Inquire for followup</div> <br>
                <div>Talk to the assistant again to get your result.</div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
          <v-btn flat dark @click.native="dialog3 = true">
             <v-icon>phone</v-icon>
          
           Talk to assistant
             
          </v-btn>
              </v-card-actions>
            </v-card>

             <v-dialog v-model="dialog3" max-width="500px">
        <v-card>
          
          <v-card-text>
             <v-text-field
          name="input-1"
          label="Enter Assistant Number"
          id="testing"
        ></v-text-field>
          </v-card-text>
          <v-card-actions >
            <v-btn color="primary" flat @click.stop="dialog3=false">Close</v-btn>
            <v-btn color="primary" flat @click.stop="$router.push('Chat')">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
        language: 'en',
        dialog3: false
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
