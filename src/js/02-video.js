import Player from "@vimeo/player";

import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

iframePlayer.on('timeupdate', throttle(currentTime => {
       
localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds));
    
 },1000));

 iframePlayer.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    // seconds = the actual time that the player seeked to
 }).catch(function (error) {
    //  console.log('error', error);
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});