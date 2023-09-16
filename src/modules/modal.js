import { isMobile } from "./check-window"

export const modal = () => {
  const modal = document.querySelector('.popup')
  const modalContent = document.querySelector('.popup-content')
  const buttons = document.querySelectorAll('.popup-btn')
  const closeBtn = modal.querySelector('.popup-close')
  modalContent.style.transform = `scale(0)`
  modalContent.style.transition = `transform .3s ease-in-out`

  let count = 0
  let idInterval

  const anim = () => {
    count++
    idInterval = requestAnimationFrame(anim)

    if (count <= 1) {
      modalContent.style.transform = `scale(${count})`
    } else {
      cancelAnimationFrame(idInterval)
    }
  }


  buttons.forEach(e => {
    e.addEventListener('click', () => {
      modal.style.display = 'block'
      count = 0
      setTimeout(anim, 300)
    })
  })

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
    modalContent.style.transform = `scale(0)`
  })

  if (isMobile()) {
    modalContent.style.transform = `scale(1)`
    clearTimeout(anim)
  }
}