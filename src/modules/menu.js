import { smoothScroll } from "./smooth-scroll"

export const menu = () => {
  const menuBtn = document.querySelector('.menu')
  const menu = document.querySelector('menu')
  const closeBtn = menu.querySelector('.close-btn')
  const menuItems = menu.querySelectorAll('ul>li>a')
  const serviceLink = document.querySelector('[href="#service-block"]')
  const body = document.querySelector('body')

  smoothScroll(serviceLink)

  menuItems.forEach(el => {
    el.classList.add('menu-link')
    smoothScroll(el)

  })

  const toggleMenu = () => {
    body.addEventListener('click', (e) => {
      const clickEventBurger = e.target.closest('.menu')
      const clickEventClose = e.target.classList.contains('close-btn')
      const clickEventLink = e.target.classList.contains('menu-link')
      const clickEventMenu = e.target.classList.contains('active-menu')

      if (clickEventClose || clickEventLink || clickEventBurger) {
        handleMenu()
      } else if(!clickEventMenu) {
        menu.classList.remove('active-menu')
      }
    })
  }

  const handleMenu = () => {
    menu.classList.toggle('active-menu')
  }


  toggleMenu()

}