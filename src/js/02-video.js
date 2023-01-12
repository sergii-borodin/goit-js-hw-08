import Player from "@vimeo/player";

import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

iframePlayer.on('timeupdate', throttle(currentTime => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds));

    localStorage.getItem("videoplayer-current-time");
    },1000));

 iframePlayer.setCurrentTime(localStorage.getItem("videoplayer-current-time"))