import { aboutCourseCarousel, aboutCourseCarouselCellphone, carousel } from "./carousel.js"
import { changeImg } from "./change_image.js"
import { hamburguerMenu } from "./hamburguer_menu.js"
import { btnLink } from "./link.js"


let arrModules = [
    "En éste módulo vamos a hablar sobre lo que es tener una cuenta en un sitio web, como estas se entrelazan, como NO se entrelazan, qué datos requieren ciertas páginas para poder ingresar a ellas y por que los requieren y cuando NO es confiable dar todos tus datos personales.",
    "En éste módulo vamos a hablar sobre ¿Qué son las estafas virtuales?, en donde se suelen encontrar, y qué indicios en ciertas páginas nos dan ciertos indicios de sus intenciones ocultas y que sitios son realmente verídicos para poder hacer transacciones en línea de una manera más segura.",
    "En éste módulo vamos a hablar sobre la gran diferencia entre una página que se dedique a la compra y/o venta de productos entre una página que solamente aparenta dedicarse a la compra y/o ventas de producto pero que en realidad puede ser una trampa para cualquier comprador.",
    "En éste módulo vamos a hablar del paso a paso, lento pero seguro, de cómo se realiza una compra virtual exitosa y como verificar que la transacción bancaria se realizó.",
    "Hasta las personas con más experiencia pueden llegar a tener problemas con una compra virtual, por lo que en este módulo se abordará a quienes podemos acudir si fuimos estafados o si tenemos problemas con la compra realizada."
], arrAboutUs = [
    "Somos un grupo de estudiantes de grado 11 que busca implementar sus conocimientos tecnológicos con el fin de ayudar a los adultos mayores a navegar de forma segura en el internet",
    "Queremos ayudar a formar a adultos mayores para que puedan navegar por el internet con una mayor conciencia sobre la ciberseguridad al momento de realizar compras online",
    "A través de un curso virtual dividido en módulos, en el que a través de material audiovisual podamos generar una cercanía a los adultos mayores y que de ésta manera puedan aprender con facilidad"
]

const d = document

d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".header-img", "header", ".header-top a")
    changeImg(".header-img img")
    carousel(".left-arrow", ".right-arrow", "#about-us h2", "#about-us p", ["¿Quiénes somos?", "¿Qué queremos?", "¿Cómo lo harémos?"], arrAboutUs, ".circle-inside")
    aboutCourseCarousel(".module-btn", ".course-information-text h2", ".course-information-text p", ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5"], arrModules)
    aboutCourseCarouselCellphone(".about-course-left-arrow", ".about-course-right-arrow", ".course-information-index", ".course-information-title", ".course-information-text p", ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5"], arrModules)
    btnLink("#introduction button", "http://127.0.0.1:5500/Colegio/2022/Enfasis/curso.html")
})