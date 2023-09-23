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

export{ animationNum, animateScale }