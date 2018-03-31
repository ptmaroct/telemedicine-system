<template>
    <div>
        
        <video id="localVideo"></video>
        <div id="remoteVideos"></div>
        </div>
</template>

<script>
import SimpleWebRTC from 'simplewebrtc';
var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remoteVideos',
    // immediately ask for camera access
    autoRequestMedia: false,
    // media: {
    //     video: false,
    //     audio: false
    // }
});

var isReady;

// we have to wait until it's ready
webrtc.on('readyToCall', function () {
    isReady = true;
    
});

if(isReady){
    webrtc.joinRoom('14')
}
export default {
  
}
</script>
