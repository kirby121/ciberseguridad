export function hamburguerMenu(btn, menu, a) {
    const d = document,
    $btn = d.querySelector(btn),
    $menu = d.querySelector(menu),
    $menuA = d.querySelectorAll(a)

    $btn.addEventListener("click", e => {

        if(window.screen.availWidth <= 1000){
            $menu.classList.toggle("header-active")
            $menuA.forEach(el => {
                el.classList.toggle("a-hidden")
            });
        } else  window.scroll(0,0)
    })
}