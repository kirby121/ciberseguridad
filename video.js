const d = document

export function startVideo(btn, div, video) {
    const $btn = d.querySelector(btn),
    $div = d.querySelector(div),
    $video = d.querySelector(video)
    
    $btn.addEventListener("click", e => {
        $div.classList.add("none")
        $video.play()
    })
}

export function pauseBtn(btn, video) {
    const $btn = d.querySelector(btn),
    $video = d.querySelector(video)

    let paused = false

    $btn.addEventListener("click", e => {
        if(!paused){
            $video.pause()
            paused = true
        }
        else {
            $video.play()
            paused = false
        }
    })
}

export function volumeBtn(moreVolume, lessVolume, video) {

    const $moreVolume = d.querySelector(moreVolume),
    $lessVolume = d.querySelector(lessVolume),
    $video = d.querySelector(video)
    
    $video.volume = 0.5

    d.addEventListener("click", e => {
        if(e.target === $lessVolume) $video.volume -= 0.1
        else if(e.target === $moreVolume) $video.volume += 0.1
    })
    
}

export function returnTimeBtn(btn, video) {
    const $btn = d.querySelector(btn),
    $video = d.querySelector(video)

    $btn.addEventListener("click", e => $video.currentTime -= 10)
}

export function addControls() {
    if(window.screen.width < 1000) d.querySelector("#video video").setAttribute("controls","controls")
}