import { changeImg } from "./change_image.js"
import { hamburguerMenu } from "./hamburguer_menu.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".header-img", "header", ".header-top a")
    changeImg(".header-img img")
})