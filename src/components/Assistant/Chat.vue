<template>
  <div>
   <v-toolbar>
          <v-btn icon @click="$router.go('-1')">
              <v-icon>arrow_back</v-icon>
            </v-btn>
    <v-toolbar-title>Live Chat</v-toolbar-title>
  </v-toolbar>
       <v-container>
           <v-layout row>
               <v-flex m6>
               <div class="headline">Doctor</div>
                   <video id="localVideo"></video>
               </v-flex>
               <v-flex m6>
               <div class="headline">Patient</div>
               
        <div id="remoteVideos"></div>
                   
               </v-flex>
           </v-layout>
           <v-layout row>
            <v-flex md6 xs12>
             <v-text-field
          name="input-1"
          label="Name"
          id="testing"
          v-model = "name"
        ></v-text-field>
            </v-flex>
            <v-flex md6 xs12>
            <v-text-field
          name="input-1"
          label="Phone Number"
          id="testing"
          v-model="mobile"
        ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
         <v-flex md6 xs12>
             <v-select
          :items="items"
          label="Select gender"
          v-model="gender"
          single-line
        ></v-select>
            </v-flex>

            <v-flex md6 xs12>
            <v-text-field
          name="input-1"
          label="Age"
          id="testing"
          v-model="age"
        ></v-text-field>
            </v-flex>

        </v-layout>
       <v-text-field
          name="input-7-1"
          label="Type patient problem here.."
          multi-line
          v-model="summary"
        ></v-text-field>
        <v-select
          :items="statuses"
          label="Select status"
          v-model="status"
          single-line
        ></v-select>
        <v-btn color="indigo darken-4 white--text" @click="submitBrief()">Save</v-btn>
        <v-btn color="cyan darken-4 white--text" @click="dialog3=true">Send to Specialist</v-btn>

        <v-dialog v-model="dialog3" max-width="500px">
        
        <v-card>
           <v-list two-line>
          <template v-for="(item, index) in listitems">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
            <v-list-tile avatar v-else :key="item.title" @click="">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>     
        </v-card> 
        </v-dialog>
       </v-container>
  </div>
</template>

<script>
import SimpleWebRTC from 'simplewebrtc';
import { briefsRef } from '@/firebase';
import moment from 'moment';

const webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remoteVideos',
    // immediately ask for camera access
    autoRequestMedia: true,
    // media: {
    //     video: false,
    //     audio: false
    // }
});

// we have to wait until it's ready
webrtc.on('readyToCall', function () {
    // you can name it anything
    webrtc.joinRoom('14');
});

// webrtc.createRoom('14');
export default {
  data() {
    return {
      items: [
       "Male" ,
       "Female" ,
       "Transgender" ,
       "Other" 
      ],
      listitems: [
          { header: 'Select a doctor' },
          { avatar: 'https://vuetifyjs.com/static/doc-images/lists/1.jpg', title: 'Dr. Ahmed Khan', subtitle: "<span class='text--primary'>Eye specialist</span>" },
          { divider: true, inset: true },
          { avatar: 'https://vuetifyjs.com/static/doc-images/lists/2.jpg', title: 'Dr. Batra', subtitle: "<span class='text--primary'>ENT specialist</span>" },
          { divider: true, inset: true },
          { avatar: 'https://vuetifyjs.com/static/doc-images/lists/3.jpg', title: 'Dr. Raghu', subtitle: "<span class='text--primary'>Cardiologist</span>" }
        ],
      e1: null,
      briefs: null,
      dialog3: false,
      name: '',
      age: '',
      gender: '',
      mobile: '',
      summary: '',
      status: ''
    }
  },
  firebase: {
    briefs: briefsRef
  },
  methods: {
    submitBrief(){
      briefsRef.push(
        {
          name: this.name, 
          age: this.age, 
          gender: this.gender, 
          mobile: this.mobile, 
          summary: this.summary,
          status: 'pending',
          timestamp: Date.now()
        })
    }
  }
};
</script>

<style>
video {
    border: solid 2px black;
}
</style>