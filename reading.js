const d = document

export function speechVoice(btn) {
    const speechMessage = new SpeechSynthesisUtterance(),
    $btn = d.querySelector(btn)

    $btn.addEventListener("click", e => {
        speechMessage.text = 'Ahora veremos algunos conceptos importantes... Url: La url o link es la dirección del sitio en el que has ingresado, se puede ver en la parte superior de tu navegador web y normalmente lleva un "www." al inicio y un ".com" al final. Si un sitio al que ingresas no tiene alguna de estas, tranquilo, puede que use otro dominio, pero en nuestro contexto de tiendas en línea, siempre llevan estos dos conectores.  Subscripciones: Una suscripción paga o una suscripción a un servicio es un pago mensual, semanal o anual que haces a un servicio en línea sea como plataformas o aplicaciones de entretenimiento ( como ejemplo tenemos a Netflix), suscripciones a servicios de antivirus y software(Avast como uno de los más famosos), entre otros tipos de subscripciones... Correo electrónico: Por si tienes dudas sobre que es un correo electrónico, es (como su nombre lo dice) un correo creado por medio de internet que te permite recibir y enviar mensajes a otras personas a través de la red, con el también puedes registrarte en sitios de interés, entretenimiento, o de comercio en línea. Este en la mayoría de los casos te va a servir para llevar registro de tus transacciones y para recibir información de los sitios en los que registres el correo.(Algunos medios para crear uno son google o Microsoft outlook).'
        speechSynthesis.speak(speechMessage)
    })
}