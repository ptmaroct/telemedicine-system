<template>
<div>
    <v-toolbar>
          <v-btn icon @click="$router.go(-1)">
              <v-icon>arrow_back</v-icon>
            </v-btn>
    <v-toolbar-title>Diagnosis</v-toolbar-title>
  </v-toolbar>
   <v-content>
       <v-container>
          <div class="headline">Select problematic body parts</div>

                      <div v-for="(part,index) in parts" :key="index" :value="part" class="text-xs-center">
          <v-chip close>{{part}}</v-chip>
        </div> 
          
  
   <v-expansion-panel expand>
    <v-expansion-panel-content>
      <div slot="header">Top</div>
      <v-card>
      <div class="text-xs-center">
          <v-chip @click="parts.push('Head')">Head</v-chip>
          <v-chip @click="parts.push('Nose')">Nose</v-chip>
          <v-chip @click="parts.push('Eyes')">Eyes</v-chip>
          <v-chip @click="parts.push('Hair')">Hair</v-chip>
        </div>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <div slot="header">Middle</div>
      <v-card>
        <div class="text-xs-center">
          <v-chip>Stomach</v-chip>
          <v-chip>Heart</v-chip>
          <v-chip>Liver</v-chip>
          <v-chip>Chest</v-chip>
          <v-chip>Hands</v-chip>
        </div>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <div slot="header">Bottom</div>
      <v-card>
          <div class="text-xs-center">
          <v-chip>Legs</v-chip>
          <v-chip>Heart</v-chip>
          <v-chip>Liver</v-chip>
          <v-chip>Chest</v-chip>
        </div>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  <v-btn block ripple color="primary" @click="showDialog()">Continue</v-btn>
       </v-container>
      

  <v-dialog v-model="dialog3" max-width="500px">
        
         <v-card>
               <v-layout row justify-center>
                   <v-card-media class="pa-2">
                  <v-progress-circular indeterminate color="primary" :size="50"></v-progress-circular>

                   </v-card-media>

       </v-layout>
            
             </v-card> 
     

        
         
        
      </v-dialog>
  </v-content>
</div>
 
</template>

<script>
export default {
  data(){
      return {
          parts: [],
          dialog3: false
      }
  },
  methods: {
      showDialog(){
          this.dialog3 = true;
          setTimeout(()=> {this.dialog3 = false; this.$router.push('Result')}, 1000)
      }
  }
}
</script>
