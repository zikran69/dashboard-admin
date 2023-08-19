const sId = (id) => document.getElementById(id)
const sAll = (elms) => document.querySelectorAll(elms)


sAll('.ri-search-line').forEach((e) => e.parentElement.addEventListener('click', () => {
    sId('modal').classList.toggle('hidden')
    sId('modal-overlay').classList.toggle('hidden')
}))

s('close-modal').addEventListener('click', () => {
    sId('modal').classList.toggle('hidden')
    sId('modal-overlay').classList.toggle('hidden')
})

s('modal-overlay').addEventListener('click', () => {
    sId('modal').classList.toggle('hidden')
    sId('modal-overlay').classList.toggle('hidden')
})