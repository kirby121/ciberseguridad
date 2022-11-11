const d = document,
ls = localStorage

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
        
            if(e.target === $lessVolume && $video.volume >= 0.1) $video.volume -= 0.1
            else if(e.target === $moreVolume && $video.volume <= 0.9) $video.volume += 0.1
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

export function videoEnd(video, videoSection, videoLectureSection, lectureSection, lecturesArr) {

    if(ls.getItem("lectureNumber") === null){
        ls.setItem("lectureNumber", 0)
    }
    
    const $video = d.querySelector(video),
    $videoSection = d.querySelector(videoSection),
    $videoLectureSection = d.querySelector(videoLectureSection),
    $lectureSection = d.querySelector(lectureSection),
    $lectureSectionText = d.querySelector(`.contentuwu`)

    $video.addEventListener("ended", e => {
        $videoSection.classList.add("none")
        $videoLectureSection.classList.add("none")
        $lectureSection.classList.remove("none")
        let num = ls.getItem("lectureNumber")
        num++
        ls.setItem("lectureNumber", num)
        $lectureSectionText.innerHTML = lecturesArr[num-1]
    })
}

export function changeVid (btn, video, videoArr, videoSection, videoLectureSection, lectureSection) {
    if(ls.getItem("number") === null){
        ls.setItem("number", 0)
    }

    const $btn = d.querySelector(btn),
    $video = d.querySelector(video),
    $videoSection = d.querySelector(videoSection),
    $videoLectureSection = d.querySelector(videoLectureSection),
    $lectureSection = d.querySelector(lectureSection)

    $btn.addEventListener("click", e => {
        let num = ls.getItem("number")
        if(ls.getItem("number") !== "5"){
            num++
            ls.setItem("number", num)
            $video.setAttribute("src", videoArr[num])
            $videoSection.classList.remove("none")
            $videoLectureSection.classList.add("none")
            $lectureSection.classList.add("none")
            
            $video.play()
        }
    })
}