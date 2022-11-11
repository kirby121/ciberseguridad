import { speechVoice } from "./reading.js"
import { addControls, changeVid, pauseBtn, returnTimeBtn, startVideo, videoEnd, volumeBtn } from "./video.js"

const d = document

localStorage.setItem("lectureNumber", 0)
localStorage.setItem("number", 0)


let arrLectures = [

    `<p>¡Hola!, Bienvenido a nuestro curso de ciberseguridad en las compras online, esperamos que lo disfrutes y aprendas mucho.<br><br>
    En éstas lecturas te vamos a enseñar conceptos que utilizamos mucho al navegar por internet, pero que tal vez no sepamos qué significan. En caso de que no te sientas cómodo leyendo, te invitamos a presionar el botón con un altavoz en la esquina superior derecha
    </p>`,

    `<p>Ahora veremos algunos conceptos importantes: <br><br>
    <b>Url:</b> La url o link es la dirección del sitio en el que has ingresado, se puede ver en la parte superior de tu navegador web y normalmente lleva un "www." al inicio y un ".com" al final. 
    Si un sitio al que ingresas no tiene alguna de estas, tranquilo, puede que use otro dominio, pero en nuestro contexto de tiendas en línea, siempre llevan estos dos conectores.
</p>
<div class="reading-image">
    <img src="compras online.jpg" alt="imagen">
</div>
<p><b>Subscripciones:</b> Una suscripción paga o una suscripción a un servicio es un pago mensual/semanal/anual que haces a un servicio en línea sea como plataformas o aplicaciones de entretenimiento ( como ejemplo tenemos a Netflix), suscripciones a servicios de antivirus y software(Avast como uno de los más famosos), entre otros tipos de subscripciones. <br><br>
    <b>Correo electrónico: </b>Por si tienes dudas sobre que es un correo electrónico, es (como su nombre lo dice) un correo creado por medio de internet que te permite recibir y enviar mensajes a otras personas a través de la red, con el también puedes registrarte en sitios de interés, entretenimiento, o de comercio en línea. Este en la mayoría de los casos te va a servir para llevar registro de tus transacciones y para recibir información de los sitios en los que registres el correo.(Algunos medios para crear uno son google o Microsoft outlook). 
</p>`,

    `<p>Ahora veremos algunos conceptos importantes del segundo módulo: <br><br>
    <b>Transmisión electrónica:</b> Es la información y datos que se transfieren a través de la red por medio de un canal de comunicación que tiene la página con un conjunto de computadoras capaces de responder una petición dada  y devolver una respuesta concordante a la información solicitada, a su vez, a éste conjunto se le llama “servidores”, que pueden ser tanto físicos como virtuales.</p>
<div class="reading-image">
    <img src="compras online.jpg" alt="imagen">
</div>
<p><b>Derechos de autor:</b> Son aquellos que le otorgan al propietario de una obra el derecho exclusivo de ésta, la obra recibe estos derechos si la obra es original y es susceptible a ser divulgada o reproducida por cualquier medio. <br><br>
    <b>Acuerdo de transacción: </b>Es un “contrato” que el usuario debe leer y firmar dando constancia que está de acuerdo con los datos que se van a manejar dentro de la página a la que se le va a proporcionar la información y evitar que se genere un desacuerdo futuro entre el usuario y la página. 
</p>`,

    `<p>Ahora veremos algunos conceptos importantes del tercer módulo: <br><br>
    <b>Red Social:</b> Es una estructura social compuesta por un conjunto de actores con uno o mas lazos entre ellos, hablando en término de la virtualidad, es una o varias páginas donde las personas(usuarios) pueden interactuar entre sí con distintos fines.
    </p>
<div class="reading-image">
    <img src="https://media.istockphoto.com/vectors/smart-phone-social-network-drawing-vector-id499805705" alt="imagen">
</div>
<p><b>Enlaces:</b> Son aquellos que le otorgan al propietario de una obra el derecho exclusivo de ésta, la obra recibe estos derechos si la obra es original y es susceptible a ser divulgada o reproducida por cualquier medio. <br><br>
    
</p>`,

`<p>Ahora veremos algunos conceptos importantes del cuarto módulo: <br><br>
    <b>Entidad:</b> Seguramente ya sepas a que se refiere éste término, pero en caso de que no sepas: Una entidad(o banco) es una empresa que acepta depósitos del público y crea depósitos a la vista, y a su vez proveen otro tipo de servicios financieros como créditos.

    </p>
<div class="reading-image">
    <img src="https://img.freepik.com/vector-gratis/gente-diminuta-depositando-o-sacando-dinero-banco-gubernamental-ilustracion-plana_74855-17121.jpg?w=360" alt="imagen">
</div>
    
</p>`,

`<p><b>Números de contacto de las líneas de atención en la fiscalía general:</b> <br><br>60 (1) 5702000 (#7) en Bogotá<br><br>018000919748 o linea celular 122 para el resto del país.<br><br>Gracias por ver el curso, esperamos que te haya servido mucho :3

    </p>
    
</p>`
]


d.addEventListener("DOMContentLoaded", e => {
    startVideo(".video-start button", ".video-start", "#video video")
    pauseBtn(".pause", "#video video")
    volumeBtn(".volume-max", ".volume-min", "#video video")
    returnTimeBtn(".return-time", "#video video")
    addControls()
    videoEnd("#video video", "#video", ".cellphone-text", "#reading", arrLectures)
    speechVoice(".speech")
    changeVid("#reading button", "#video video", ["bienvenida.mp4", "mod1.mp4", "mod2.mp4", "mod3.mp4", "mod4.mp4", "mod5.mp4"], "#video", ".cellphone-text", "#reading")
})