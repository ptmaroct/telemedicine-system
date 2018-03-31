<template>
  <div>
      <v-toolbar>
          <v-btn icon @click="$router.go(-1)">
              <v-icon>arrow_back</v-icon>
            </v-btn>
    <v-toolbar-title>Initiate Conversation</v-toolbar-title>
  </v-toolbar>
  <v-content>
      <v-container row>
          <span class="headline">How would you like to talk?</span>
          <v-card color="cyan darken-2" class="white--text" @click.native="mode='voice'; gotoChat()">
              <v-card-title primary-title>
                <div class="headline text-xs-center">
                    <v-icon large>settings_voice</v-icon>
                    Voice Chat</div>
              </v-card-title>
            </v-card> <br>

             <v-card color="green darken-2" class="white--text" @click="mode='video'; gotoChat()">
              <v-card-title primary-title>
                <div class="headline">
                    <v-icon large>videocam</v-icon>
                    Video Chat</div>
              </v-card-title>
            </v-card> <br>
      </v-container>
  </v-content>
  </div>
</template>

<script>
export default {
  data(){
      return {
          mode: null
      }
  },
  methods: {
      gotoChat(){
          this.$router.push('Chat', this.mode)
      }
  }
}
</script>
