import { isMobile } from "./check-window"
import { animateScale } from "./helper"


export const modal = () => {
  const modal = document.querySelector('.popup')
  const modalContent = document.querySelector('.popup-content')
  const buttons = document.querySelectorAll('.popup-btn')

  buttons.forEach(e => {
    e.addEventListener('click', () => {
      modal.style.display = 'block'

      setTimeout(() => {
        animateScale(modalContent, 0.3);
      }, 300);
    })
  })


  if (isMobile()) {
    modalContent.style.transform = `scale(1)`
    clearTimeout(animateScale)
  }

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none'
      modalContent.style.transform = `scale(0)`
    }
  })
}