const d = document,

lectures = [
    'Hola, soy el ayudante de voz que te va a acompañar durante el curso. Cuando en vez de leer, quieras escucharme, presiona el mismo botón que acabas de pulzar. Ahora sí, comencemos... ¡Hola!, Bienvenido a nuestro curso de ciberseguridad en las compras online, esperamos que lo disfrutes y aprendas mucho. En éstas lecturas te vamos a enseñar conceptos que utilizamos mucho al navegar por internet, pero que tal vez no sepamos qué significan. En caso de que no te sientas cómodo leyendo, te invitamos a presionar el botón con un altavoz en la esquina superior derecha',
    'Ahora veremos algunos conceptos importantes... Url: La url o link es la dirección del sitio en el que has ingresado, se puede ver en la parte superior de tu navegador web y normalmente lleva un "www." al inicio y un ".com" al final. Si un sitio al que ingresas no tiene alguna de estas, tranquilo, puede que use otro dominio, pero en nuestro contexto de tiendas en línea, siempre llevan estos dos conectores.  Subscripciones: Una suscripción paga o una suscripción a un servicio es un pago mensual, semanal o anual que haces a un servicio en línea sea como plataformas o aplicaciones de entretenimiento ( como ejemplo tenemos a Netflix), suscripciones a servicios de antivirus y software(Avast como uno de los más famosos), entre otros tipos de subscripciones... Correo electrónico: Por si tienes dudas sobre que es un correo electrónico, es (como su nombre lo dice) un correo creado por medio de internet que te permite recibir y enviar mensajes a otras personas a través de la red, con el también puedes registrarte en sitios de interés, entretenimiento, o de comercio en línea. Este en la mayoría de los casos te va a servir para llevar registro de tus transacciones y para recibir información de los sitios en los que registres el correo.(Algunos medios para crear uno son google o Microsoft outlook).',
    'Conceptos importantes del segundo módulo: Transmisión electrónica:Es la información y datos que se transfieren a través de la red por medio de un canal de comunicación que tiene la página con un conjunto de computadoras capaces de responder una petición dada  y devolver una respuesta concordante a la información solicitada, a su vez, a éste conjunto se le llama “servidores”, que pueden ser tanto físicos como virtuales. Derechos de autor: Son aquellos que le otorgan al propietario de una obra el derecho exclusivo de ésta, la obra recibe estos derechos si la obra es original y es susceptible a ser divulgada o reproducida por cualquier medio. Acuerdo de transacción: Es un “contrato” que el usuario debe leer y firmar dando constancia que está de acuerdo con los datos que se van a manejar dentro de la página a la que se le va a proporcionar la información y evitar que se genere un desacuerdo futuro entre el usuario y la página.',
    'Conceptos importantes del tercer módulo: Red Social: Es una estructura social compuesta por un conjunto de actores con uno o mas lazos entre ellos, hablando en término de la virtualidad, es una o varias páginas donde las personas(usuarios) pueden interactuar entre sí con distintos fines. Enlaces: es una referencia que se encuentra dentro de un documento electrónico o dentro de un sitio que redirecciona al usuario a otro sitio o documento al darle click',
    'Conceptos importantes del cuarto módulo: Entidad:Seguramente ya sepas a que se refiere éste término, pero en caso de que no sepas: Una entidad(o banco) es una empresa que acepta depósitos del público y crea depósitos a la vista, y a su vez proveen otro tipo de servicios financieros como créditos',
    'Números de contacto en caso de haber sido víctima de una estafa en línea... Números de contacto de las líneas de atención en la fiscalía general: 60 (1) 5702000 (#7) en Bogotá 018000919748 o linea celular 122 para el resto del país'
]

export function speechVoice(btn) {
    const speechMessage = new SpeechSynthesisUtterance(),
    $btn = d.querySelector(btn)

    //speechMessage.lang = "es-US"

    $btn.addEventListener("click", e => {
        speechMessage.text = lectures[localStorage.getItem(parseInt("lectureNumber")-1)]
        
        speechSynthesis.speak(speechMessage)
    })
}