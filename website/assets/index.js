/*
import MediaPlayer from '@sparragus/platzimediaplayer';
import AutoPlay from '@sparragus/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@sparragus/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@sparragus/platzimediaplayer/lib/plugins/Ads';*/
class MediaPlayer {
    constructor(video){
        this.video = video
    }

    play(){
        this.video.play()
    }

    pause(){
        this.video.pause()
    }

    togglePlay(){
        if(this.video.paused){
            this.video.play()
        }else{
            this.video.pause()
        }
    }
}

const video = document.querySelector('video');
const button = document.querySelector('button');
button.onclick = () => player.togglePlay();
//const player = new MediaPlayer({ el:video }); // no entiendo esta parte: que es "el:"
const player = new MediaPlayer(video)


