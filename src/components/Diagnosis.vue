<template>
<div>
    <v-toolbar>
          <v-btn icon @click="$router.go(-1)">
              <v-icon>arrow_back</v-icon>
            </v-btn>
    <v-toolbar-title>Diagnosis</v-toolbar-title>
  </v-toolbar>
  <v-container>
  <div class="headline">Select body section</div>
   <v-content>
        <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card @click.native = "dialog = true">
        <v-card-media
          height="200px"
          src="../../static/img/images/muscles.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
    </v-flex>
  </v-layout>
<br>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card @click.native = "dialog = true">
        <v-card-media
          height="200px"
          src="../../static/img/images/midpart.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Mid Part</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
    </v-flex>
  </v-layout>
  <br>

   <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card @click.native = "dialog = true">
        <v-card-media
          height="200px"
          src="../../static/img/images/bottompart.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Bottom</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
    </v-flex>
  </v-layout>
  
   <v-dialog
        v-model="dialog"
        fullscreen
        transition="dialog-bottom-transition"
        :overlay="false"
        scrollable
      >
        <v-card tile>
          <v-toolbar card dark color="primary">
            <v-btn icon @click.native="dialog = false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Select body part</v-toolbar-title>
            
          </v-toolbar>
          <v-card-text>
            <v-layout row wrap>
     
      <v-flex xs6>
        <img src="../../static/img/images/eyes.jpg" class="part" @click="$router.push('Chat')" />
      </v-flex>
      <v-flex xs6>
        <img src="../../static/img/images/ear.png" class="part"/>
      </v-flex>
     
      <v-flex xs6>
        <img src="../../static/img/images/hair.png" class="part"/>
      </v-flex>

      <v-flex xs6>
        <img src="../../static/img/images/nose.jpg" class="part"/>
      </v-flex>
     
      
      
    </v-layout>
          </v-card-text>

          <div style="flex: 1 1 auto;"/>
        </v-card>
      </v-dialog>
  </v-content>
  </v-container>
</div>
 
</template>

<script>
export default {
  data(){
      return {
          parts: [],
          dialog3: false,
          dialog: false
      }
  },
  methods: {
      showDialog(){
          this.dialog3 = true;
          setTimeout(()=> {this.dialog3 = false; this.$router.push('Chat')}, 1000)
      }
  }
}
</script>

<style>
.part{
  height: 100px;
}
</style>