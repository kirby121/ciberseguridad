import { aboutCourseCarousel, aboutCourseCarouselCellphone, carousel } from "./carousel.js"
import { changeImg } from "./change_image.js"
import { hamburguerMenu } from "./hamburguer_menu.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".header-img", "header", ".header-top a")
    changeImg(".header-img img")
    carousel(".left-arrow", ".right-arrow", "#about-us h2", "#about-us p", ["¿Quiénes somos?", "¿Qué queremos?", "¿Cómo lo harémos?"], ["Un pato, que va cantando alegremente cuac, cuac, cuando se encuentra a un lindo gato, miau, miau 1", "Un pato, que va cantando alegremente cuac, cuac, cuando se encuentra a un lindo gato, miau, miau 2", "Un pato, que va cantando alegremente cuac, cuac, cuando se encuentra a un lindo gato, miau, miau 3"], ".circle-inside")
    aboutCourseCarousel(".module-btn", ".course-information-text h2", ".course-information-text p", ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5"], ["Un pato, que van cantando alegremente, cuac cuac :D 1", "Un pato, que van cantando alegremente, cuac cuac :D 2", "Un pato, que van cantando alegremente, cuac cuac :D 3", "Un pato, que van cantando alegremente, cuac cuac :D 4", "Un pato, que van cantando alegremente, cuac cuac :D 5"])
    aboutCourseCarouselCellphone(".about-course-left-arrow", ".about-course-right-arrow", ".course-information-index", ".course-information-title", ".course-information-text p", ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5"], ["En éste módulo, se verán los fundamentos de x cosa, además de que se presentarán las estrategias a seguir dentro del curso", "Un pato, que van cantando alegremente, cuac cuac :D 2", "Un pato, que van cantando alegremente, cuac cuac :D 3", "Un pato, que van cantando alegremente, cuac cuac :D 4", "Un pato, que van cantando alegremente, cuac cuac :D 5"])
})