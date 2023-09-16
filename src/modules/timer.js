export const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours')
  const timerMinutes = document.getElementById('timer-minutes')
  const timerSeconds = document.getElementById('timer-seconds')

  const formatTime = (num) => {
    return num < 10 ? '0' + num : num;
  }
  const getTimeRemaning = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaning = (dateStop - dateNow) / 1000
    let hours = Math.floor((timeRemaning / 3600))
    let minutes = Math.floor((timeRemaning / 60) % 60)
    let seconds = Math.floor(timeRemaning % 60)

    return { timeRemaning, hours, minutes, seconds, }
  }

  const upddateClock = () => {
    let getTime = getTimeRemaning()
    timerHours.textContent = `${formatTime(getTime.hours)}`
    timerMinutes.textContent = `${formatTime(getTime.minutes)}`
    timerSeconds.textContent = `${formatTime(getTime.seconds)}`

    if (getTime.timeRemaning > 0) {
      setTimeout(upddateClock, 1000)
    } else {
      timerHours.textContent = '00'
      timerMinutes.textContent = '00'
      timerSeconds.textContent = '00'
    }

  }
  upddateClock()

}