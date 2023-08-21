const sAll = (elms) => document.querySelectorAll(elms)

const toggleModalAndOverlay = (element) => {
  element.addEventListener('click', () => {
    s('modal').classList.toggle('hidden')
    s('modal-overlay').classList.toggle('hidden')
  })
}

sAll('.ri-settings-4-line').forEach((e) =>
  toggleModalAndOverlay(e.parentElement)
)

toggleModalAndOverlay(s('close-modal'))

toggleModalAndOverlay(s('modal-overlay'))
