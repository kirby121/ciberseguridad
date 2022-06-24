export function carousel(leftArrow, rightArrow, title, text, arrTitle, arrText, circles) {
    const d = document,
    $leftArrow = d.querySelector(leftArrow),
    $rightArrow = d.querySelector(rightArrow),
    $title = d.querySelector(title),
    $text = d.querySelector(text),
    $circles = d.querySelectorAll(circles)

    let content = 0

    function changeContent(isLeft, circle = -1) {

        (circle == -1)
        ?  (isLeft) ? content-- : content++
        : content = circle
            
            $title.textContent = arrTitle[content]
            $text.textContent = arrText[content]
            $circles.forEach(circle => circle.classList.remove("circle-selected"));
            $circles[content].classList.add("circle-selected")
    
    }

    
    d.addEventListener("click", e => {

        $circles.forEach((circle, index) => {
        if(e.target === circle) changeContent(true, index)
        });

        if (e.target === $leftArrow && content !== 0) changeContent(true)

        else if (e.target === $rightArrow && content !== arrTitle.length-1) changeContent(false)
    })

    d.addEventListener("keyup", e => {

        if (e.key === "ArrowLeft" && content !== 0) changeContent(true)

        else if (e.key === "ArrowRight" && content !== arrTitle.length-1) changeContent(false)
    })
}

export function aboutCourseCarousel(btn, title, text, arrTitle, arrText) {
    const d = document,
    $buttons = d.querySelectorAll(btn),
    $title = d.querySelector(title),
    $text = d.querySelector(text)

    $buttons.forEach((btn, index) => {

        btn.addEventListener("click", e => {
            $title.textContent = arrTitle[index]
            $text.textContent = arrText[index]

            $buttons.forEach(btn => btn.classList.remove("module-btn-selected"));
            btn.classList.add("module-btn-selected")
        })

    });
}

export function aboutCourseCarouselCellphone(leftArrow, rightArrow, indexNum, title, text, arrTitle, arrText) {
    const d = document,
    $leftArrow = d.querySelector(leftArrow),
    $rightArrow = d.querySelector(rightArrow),
    $title = d.querySelector(title),
    $text = d.querySelector(text),
    $indexNum = d.querySelector(indexNum)

    let content = 0

    function changeContent(isLeft) {

       (isLeft) ? content-- : content++
            
            $title.textContent = arrTitle[content]
            $text.textContent = arrText[content]
            $indexNum.textContent = content + 1
    
    }

    d.addEventListener("click", e => {
        if(e.target == $leftArrow && content !== 0) changeContent(true)
        else if(e.target == $rightArrow && content !== (arrTitle.length - 1)) changeContent(false)
    })
}