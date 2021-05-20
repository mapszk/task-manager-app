import { getTimerConfig } from "./loadTimerConfig"

const $startTimerButton = document.getElementById('start_timer')
const $pauseTimerButton = document.getElementById('pause_timer')
const $counter = document.getElementById('pomodoro_counter')
const $timer = document.getElementById('timer')
const $title = document.getElementById('pomodoro_state')
const $minutes = document.getElementById('minutes')
const $seconds = document.getElementById('seconds')
const $sound = document.getElementById('sound')

/* timer config panel */
const $timerPanel = document.querySelector('.timer__panel')
const $workTime = document.getElementById('work_input')
const $shortBreak = document.getElementById('short_input')
const $longBreak = document.getElementById('long_input')

let minutes
let seconds
let timer
let repeats = 0
let pomo = 0

export default function(){
    const {workTime, shortBreakTime, longBreakTime} = getTimerConfig()
    document.addEventListener('click', e=>{
        if(e.target.id === 'start_timer'){
            if($minutes.textContent == workTime){
                $timer.classList.add('work')
                $timer.classList.remove('break')
                $title.textContent = 'Work time'
                $pauseTimerButton.textContent = 'Pause'
                $startTimerButton.disabled = true
                $pauseTimerButton.disabled = false
                const {workTime} = getTimerConfig()
                minutes = workTime
                seconds = 0
                repeats++
                timer = setInterval(() => {
                    $minutes.textContent = minutes
                    $seconds.textContent = seconds < 10 ? `0${seconds}` : seconds
                    if(minutes === 0 && seconds === 0){
                        clearInterval(timer)
                        $sound.play()
                        $minutes.textContent = repeats === 4 ? longBreakTime : shortBreakTime
                        $startTimerButton.disabled = false
                        $pauseTimerButton.disabled = true
                        $timer.classList.add('break')
                        $timer.classList.remove('work')
                        $title.textContent = repeats === 4 ? 'Long break' : 'Short break'
                        pomo++
                        $counter.textContent = `You've completed ${pomo} pomodoros`
                    }else if(seconds === 0){
                        seconds = 59
                        minutes--
                    }else seconds--
                }, 1000);
            }else if($minutes.textContent == shortBreakTime){
                $timer.classList.add('break')
                $timer.classList.remove('work')
                $title.textContent = 'Short break'
                $startTimerButton.disabled = true
                $pauseTimerButton.disabled = false
                $pauseTimerButton.textContent = 'Skip'
                minutes = shortBreakTime
                seconds = 0
                timer = setInterval(() => {
                    $minutes.textContent = minutes
                    $seconds.textContent = seconds < 10 ? `0${seconds}` : seconds
                    if(minutes === 0 && seconds === 0){
                        clearInterval(timer)
                        $sound.play()
                        $minutes.textContent = workTime
                        $startTimerButton.disabled = false
                        $pauseTimerButton.disabled = true
                        $title.textContent = 'Work time'
                        $timer.classList.add('work')
                        $timer.classList.remove('break')
                    }else if(seconds === 0){
                        seconds = 59
                        minutes--
                    }else seconds--
                }, 1000);
            }else if($minutes.textContent == longBreakTime){
                $timer.classList.add('break')
                $timer.classList.remove('work')
                $title.textContent = 'Long break'
                $startTimerButton.disabled = true
                $pauseTimerButton.disabled = false
                $pauseTimerButton.textContent = 'Skip'
                const {longBreakTime} = getTimerConfig()
                minutes = longBreakTime
                seconds = 0
                timer = setInterval(() => {
                    $minutes.textContent = minutes
                    $seconds.textContent = seconds < 10 ? `0${seconds}` : seconds
                    if(minutes === 0 && seconds === 0){
                        clearInterval(timer)
                        $sound.play()
                        $minutes.textContent = workTime
                        repeats = 0
                        $startTimerButton.disabled = false
                        $pauseTimerButton.disabled = true
                        $title.textContent = 'Work time'
                        $timer.classList.add('work')
                        $timer.classList.remove('break')
                    }else if(seconds === 0){
                        seconds = 59
                        minutes--
                    }else seconds--
                }, 1000);
            }
        }
        if(e.target.id === 'pause_timer'){
            if(e.target.textContent === 'Pause'){
                clearInterval(timer)
                $pauseTimerButton.textContent = 'Resume'
            }else if(e.target.textContent === 'Resume'){
                timer = setInterval(() => {
                    $minutes.textContent = minutes
                    $seconds.textContent = seconds < 10 ? `0${seconds}` : seconds
                    if(minutes === 0 && seconds === 0){
                        clearInterval(timer)
                        $sound.play()
                        $minutes.textContent = repeats === 4 ? longBreakTime : shortBreakTime
                        $pauseTimerButton.textContent = 'Pause'
                        $startTimerButton.disabled = false
                        $pauseTimerButton.disabled = true
                        $timer.classList.add('break')
                        $timer.classList.remove('work')
                        $title.textContent = repeats === 4 ? 'Long break' : 'Short break'
                        pomo++
                        $counter.textContent = `You've completed ${pomo} pomodoros`
                    }else if(seconds === 0){
                        seconds = 59
                        minutes--
                    }else seconds--
                }, 1000);
                $pauseTimerButton.textContent = 'Pause'
            }
            if(e.target.textContent === 'Skip'){
                clearInterval(timer)
                $startTimerButton.disabled = false
                $pauseTimerButton.disabled = true
                $pauseTimerButton.textContent = 'Pause'
                $timer.classList.add('work')
                $timer.classList.remove('break')
                $title.textContent = 'Work time'
                $minutes.textContent = workTime
                $seconds.textContent = '00'
            }
        }

        /* timer config panel */
        if(e.target.parentElement.id === 'timer_config'){
            $timerPanel.classList.add('active')
        }
        if(e.target.id === 'cancel_timer'){
            $timerPanel.classList.remove('active')
        }
        if(e.target.id === 'submit_timer'){
            const workTime = Math.floor(parseInt($workTime.value))
            const shortBreakTime = Math.floor(parseInt($shortBreak.value))
            const longBreakTime = Math.floor(parseInt($longBreak.value))
            localStorage.setItem('workTime', workTime.toString())
            localStorage.setItem('shortBreakTime', shortBreakTime.toString())
            localStorage.setItem('longBreakTime', longBreakTime.toString())
            $timerPanel.classList.remove('active')
            location.reload()
        }
    })
}