const $minutes = document.getElementById('minutes')
const $counter = document.getElementById('pomodoro_counter')

export function getPomodoros() {
    if(localStorage.getItem('pomodoros') === null) return 0
    else return parseInt(localStorage.getItem('pomodoros'))
}

export function getTimerConfig(){
    let workTime, shortBreakTime, longBreakTime;
    if(localStorage.getItem('workTime') === null) workTime = 25
    else workTime = parseInt(localStorage.getItem('workTime'))
    if(localStorage.getItem('shortBreakTime') === null) shortBreakTime = 5
    else shortBreakTime = parseInt(localStorage.getItem('shortBreakTime'))
    if(localStorage.getItem('longBreakTime') === null) longBreakTime = 15
    else longBreakTime = parseInt(localStorage.getItem('longBreakTime'))
    return {workTime, shortBreakTime, longBreakTime}
}

export default function loadTimerConfig(){
    const {workTime} = getTimerConfig()
    $minutes.textContent = workTime
    $counter.textContent = getPomodoros() > 0 ? `You've completed ${getPomodoros()} pomodoros` : null
}