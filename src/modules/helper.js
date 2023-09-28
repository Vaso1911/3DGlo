const animationNum = (value, elem) => {
  let time = 1000;
  let step = 1;
  let num = 0;
  let timeNum = time / (parseInt(value) / step);

  let interval = setInterval(() => {
    num += step;
    if (num >= parseInt(value)) {
      num = parseInt(value);
      clearInterval(interval);
    }
    elem.textContent = num;
  }, timeNum);
};

const animateScale = (elem, duration) => {
  elem.style.transform = `scale(0)`;
  elem.style.transition = `transform ${duration}s ease-in-out`;

  let count = 0;
  let idInterval;

  const anim = () => {
    count++;
    idInterval = requestAnimationFrame(anim);

    if (count <= 1) {
      elem.style.transform = `scale(${count})`;
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  anim();
};

const inputPhoneValidate = (elem) => {
  if (elem) {
    const phonePattern = /^[0-9+()\-]+$/
    if (phonePattern.test(elem.value)) {
      elem.classList.add('success')
      return true
    } else {
      elem.classList.remove('success')
      return false
    }
  }
  return false
}
const inputEmailValidate = (elem) => {
  if (elem) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(elem.value)) {
      elem.classList.add('success')
      return true
    } else {
      elem.classList.remove('success')
      return false
    }
  }
 return false
}
const inputNameValidate = (elem) => {
  if (elem) {
    const namePattern = /^[а-яА-Я\s]+$/
    if (namePattern.test(elem.value)) {
      elem.classList.add('success')
      return true
    } else {
      elem.classList.remove('success')
      return false
    }
  }
 return false
}
const inputMessageValidate = (elem) => {
  if (elem) {
    const messagePattern = /^[а-яА-Я\s0-9.,!?()-]+$/
    if (messagePattern.test(elem.value)) {
      elem.classList.add('success')
      return true
    } else {
      elem.classList.remove('success')
      return false
    }
  }
 return false
}



export { animationNum, animateScale, inputPhoneValidate, inputEmailValidate, inputNameValidate, inputMessageValidate }