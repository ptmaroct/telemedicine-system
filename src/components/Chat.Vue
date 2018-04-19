<template>
    <div>
         <v-layout row>
               <v-flex m6>
               <div class="headline">Patient</div>
                   <video id="localVideo"></video>
               </v-flex>
               <v-flex m6>
               <div class="headline">Doctor</div>
               
        <div id="remoteVideos"></div>
                   
               </v-flex>
           </v-layout>
        </div>
</template>

<script>
import SimpleWebRTC from 'simplewebrtc';
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
    // isReady = true;
    webrtc.joinRoom('14')
    
});

// if(isReady){
//     webrtc.joinRoom('14')
// }
export default {
  methods:{
      send(){
      }
  }
}
</script>

<style>
video {
    border: solid 2px black;
}
</style>