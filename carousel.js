export function carousel(leftArrow, rightArrow, title, text, arrTitle, arrText, circles) {
    const d = document,
    $leftArrow = d.querySelector(leftArrow),
    $rightArrow = d.querySelector(rightArrow),
    $title = d.querySelector(title),
    $text = d.querySelector(text),
    $circles = d.querySelectorAll(circles)

    let content = 0

    function changeContent(isLeft) {
        (isLeft) ? content-- : content++

        $title.textContent = arrTitle[content]
                $text.textContent = arrText[content]
                $circles.forEach(circle => circle.classList.remove("circle-selected"));
                $circles[content].classList.add("circle-selected")
    }

    d.addEventListener("click", e => {
        if (e.target === $leftArrow && content !== 0) changeContent(true)

        else if (e.target === $rightArrow && content !== arrTitle.length-1) changeContent(false)
    })

    d.addEventListener("keyup", e => {

        if (e.key === "ArrowLeft" && content !== 0) changeContent(true)

        else if (e.key === "ArrowRight" && content !== arrTitle.length-1) changeContent(false)
    })
}