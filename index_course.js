import { addControls, pauseBtn, returnTimeBtn, startVideo, volumeBtn } from "./video.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
    startVideo(".video-start button", ".video-start", "#video video")
    pauseBtn(".pause", "#video video")
    volumeBtn(".volume-max", ".volume-min", "#video video")
    returnTimeBtn(".return-time", "#video video")
    addControls()
})