export const smoothScroll = (link) => {

  link.addEventListener('click', (e) => {
    e.preventDefault()

    const linkId = link.getAttribute('href').substring(1)
    const section = document.getElementById(linkId)

    if (section) {
      const topOffset = section.offsetTop

      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  })

}