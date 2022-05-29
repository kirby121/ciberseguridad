export function changeImg(img) {
    const d = document,
    $img = d.querySelector(img);

    (window.screen.availWidth <= 1000)
        ? $img.setAttribute("src", "hamburguer menu.png")
        : $img.setAttribute("src", "candado.png")

    window.addEventListener("resize", e => {

        (window.screen.availWidth <= 1000)
        ? $img.setAttribute("src", "hamburguer menu.png")
        : $img.setAttribute("src", "candado.png")
    })
}