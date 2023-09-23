export const slider = (sliderClass, slidesClass, dotsListClass, dotClass, btnClass, activeSlideClass, activeDotClass) => {
  const sliderBlock = document.querySelector(`.${sliderClass}`)
  const slides = document.querySelectorAll(`.${slidesClass}`)
  const dotsList = document.querySelector(`.${dotsListClass}`)

  if (!sliderBlock) {
    return
  }

  if (!slides.length) {
    return
  }

  sliderBlock.children[0].classList.add(`${activeSlideClass}`)

  const createDots = () => {
    let dotsListHtml = ''
    for (let i = 0; i < slides.length; i++) {
      dotsListHtml += `
        <li class="dot"></li>
      `
    }
    dotsList.innerHTML = dotsListHtml
    dotsList.children[0].classList.add(`${activeDotClass}`)
  }

  createDots()

  const dots = document.querySelectorAll(`.${dotClass}`)
  let currentSlide = 0
  let interval
  let timeInterval = 2000

  const prevSlide = (el, i, strClass) => {
    el[i].classList.remove(strClass)
  }

  const nextSlide = (el, i, strClass) => {
    el[i].classList.add(strClass)
  }

  const autoSlide = () => {
    prevSlide(slides, currentSlide, activeSlideClass)
    prevSlide(dots, currentSlide, activeDotClass)
    currentSlide++
    if (currentSlide >= slides.length) {
      currentSlide = 0
    }
    nextSlide(slides, currentSlide, activeSlideClass)
    nextSlide(dots, currentSlide, activeDotClass)
  }
  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer)
  }
  const stopSlide = () => {
    clearInterval(interval)
  }
  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault()

    if (!e.target.matches(`.${dotClass}, .${btnClass}`)) {
      return
    }

    prevSlide(slides, currentSlide, activeSlideClass)
    prevSlide(dots, currentSlide, activeDotClass)

    if (e.target.matches('#arrow-right')) {
      currentSlide++
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--
    } else if (e.target.classList.contains(`${dotClass}`)) {
      dots.forEach((dot, i) => {
        if (e.target === dot) {
          currentSlide = i
        }
      })
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1
    }

    nextSlide(slides, currentSlide, activeSlideClass)
    nextSlide(dots, currentSlide, activeDotClass)
  })


  sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches(`.${dotClass}, .${btnClass}`)) {
      stopSlide()
    }
  }, true)

  sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches(`.${dotClass}, .${btnClass}`)) {
      startSlide(timeInterval)
    }
  }, true)

  startSlide(timeInterval)
}