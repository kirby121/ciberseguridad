import { speechVoice } from "./reading.js"
import { addControls, pauseBtn, returnTimeBtn, startVideo, videoEnd, volumeBtn } from "./video.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
    startVideo(".video-start button", ".video-start", "#video video")
    pauseBtn(".pause", "#video video")
    volumeBtn(".volume-max", ".volume-min", "#video video")
    returnTimeBtn(".return-time", "#video video")
    addControls()
    videoEnd("#video video", "#video", ".cellphone-text", "#reading")
    speechVoice(".speech")
})
