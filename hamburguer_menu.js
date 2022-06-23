export function hamburguerMenu(btn, menu, a) {
    const d = document,
    $btn = d.querySelector(btn),
    $menu = d.querySelector(menu),
    $menuA = d.querySelectorAll(a)

    const changeMenu = () => {
        if(window.screen.availWidth <= 1000){
            $menu.classList.toggle("header-active")
            $menuA.forEach(el => {
                el.classList.toggle("a-hidden")
            });
        }
    }

    $menuA.forEach(el => {
        el.addEventListener("click", e => {
            changeMenu()
        })
    });

    $btn.addEventListener("click", e => {

        changeMenu()
        if(window.screen.availWidth > 1000) window.scroll(0,0)
    })
}