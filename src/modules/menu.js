import { smoothScroll } from "./smooth-scroll"

export const menu = () => {
  const menuBtn = document.querySelector('.menu')
  const menu = document.querySelector('menu')
  const closeBtn = menu.querySelector('.close-btn')
  const menuItems = menu.querySelectorAll('ul>li>a')
  const serviceLink = document.querySelector('[href="#service-block"]')

  smoothScroll(serviceLink)

  menuItems.forEach(el => {
    el.addEventListener('click', smoothScroll(el))
  })

  const handleMenu = () => {
    menu.classList.toggle('active-menu')
  }

  menuBtn.addEventListener('click', handleMenu)
  closeBtn.addEventListener('click', handleMenu)

  menuItems.forEach(e => e.addEventListener('click', handleMenu))
}