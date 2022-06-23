import { carousel } from "./carousel.js"
import { changeImg } from "./change_image.js"
import { hamburguerMenu } from "./hamburguer_menu.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".header-img", "header", ".header-top a")
    changeImg(".header-img img")
    carousel(".left-arrow", ".right-arrow", "#about-course h2", "#about-course p", ["¿Quiénes somos?", "¿Qué queremos?", "¿Cómo lo harémos?"], ["Un pato, que va cantando alegremente cuac, cuac, cuando se encuentra a un lindo gato, miau, miau 1", "Un pato, que va cantando alegremente cuac, cuac, cuando se encuentra a un lindo gato, miau, miau 2", "Un pato, que va cantando alegremente cuac, cuac, cuando se encuentra a un lindo gato, miau, miau 3"], ".circle-inside")
})