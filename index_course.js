const d = document

export function btnLink(btn, link) {
    d.querySelector(btn).addEventListener("click", e => location.href = link)
}