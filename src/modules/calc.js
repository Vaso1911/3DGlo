export const calc = (price) => {
  const calcBlock = document.querySelector('.calc-block')
  const calcType = document.querySelector('.calc-type')
  const calcSquare = document.querySelector('.calc-square')
  const calcCount = document.querySelector('.calc-count')
  const calcDay = document.querySelector('.calc-day')
  const total = document.getElementById('total')

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
  const countCalc = () => {
    const calcTypevalue = +calcType.options[calcType.selectedIndex].value
    const calcSquareValue = calcSquare.value

    let totalValue = 0
    let calcCountValue = 1
    let calcDayValue = 1


    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5
    }

    if (calcType.value && calcSquare.value) {
      totalValue = price * calcTypevalue * calcSquareValue * calcCountValue * calcDayValue
    } else {
      totalValue = 0
    }

    animationNum(totalValue, total)
  }



  calcBlock.addEventListener('input', (e) => {

    if (e.target === calcType || e.target === calcSquare ||
      e.target === calcCount || e.target === calcDay) {
      countCalc()
    }

  })
}