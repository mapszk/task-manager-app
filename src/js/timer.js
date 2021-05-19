const $startTimerButton = document.getElementById('start_timer')
const $pauseTimerButton = document.getElementById('pause_timer')
const $title = document.getElementById('pomodoro_state')
const $minutes = document.getElementById('minutes')
const $seconds = document.getElementById('seconds')

let minutes
let seconds
let timer
let repeats = 0

export default function(){
    document.addEventListener('click', e=>{
        if(e.target.id === 'start_timer'){
            if($minutes.textContent === '25'){
                $title.textContent = 'Work time'
                $pauseTimerButton.textContent = 'Pause'
                $startTimerButton.disabled = true
                $pauseTimerButton.disabled = false
                minutes = 1
                seconds = 0
                repeats++
                timer = setInterval(() => {
                    $minutes.textContent = minutes
                    $seconds.textContent = seconds < 10 ? `0${seconds}` : seconds
                    if(minutes === 0 && seconds === 0){
                        clearInterval(timer)
                        $minutes.textContent = repeats === 4 ? '15' : '5'
                        $startTimerButton.disabled = false
                        $pauseTimerButton.disabled = true
                        $title.textContent = repeats === 4 ? 'Long break' : 'Short break'
                    }else if(seconds === 0){
                        seconds = 59
                        minutes--
                    }else seconds--
                }, 100);
            }else if($minutes.textContent === '5'){
                $title.textContent = 'Short break'
                $startTimerButton.disabled = true
                $pauseTimerButton.disabled = false
                $pauseTimerButton.textContent = 'Skip'
                minutes = 1
                seconds = 0
                timer = setInterval(() => {
                    $minutes.textContent = minutes
                    $seconds.textContent = seconds < 10 ? `0${seconds}` : seconds
                    if(minutes === 0 && seconds === 0){
                        clearInterval(timer)
                        $minutes.textContent = '25'
                        $startTimerButton.disabled = false
                        $pauseTimerButton.disabled = true
                        $title.textContent = 'Work time'
                    }else if(seconds === 0){
                        seconds = 59
                        minutes--
                    }else seconds--
                }, 100);
            }else{
                $title.textContent = 'Long break'
                $startTimerButton.disabled = true
                $pauseTimerButton.disabled = false
                $pauseTimerButton.textContent = 'Skip'
                minutes = 1
                seconds = 0
                timer = setInterval(() => {
                    $minutes.textContent = minutes
                    $seconds.textContent = seconds < 10 ? `0${seconds}` : seconds
                    if(minutes === 0 && seconds === 0){
                        clearInterval(timer)
                        $minutes.textContent = '25'
                        repeats = 0
                        $startTimerButton.disabled = false
                        $pauseTimerButton.disabled = true
                        $title.textContent = 'Work time'
                    }else if(seconds === 0){
                        seconds = 59
                        minutes--
                    }else seconds--
                }, 100);
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
                        $minutes.textContent = repeats === 4 ? '15' : '5'
                        $startTimerButton.disabled = false
                        $pauseTimerButton.disabled = true
                        $title.textContent = repeats === 4 ? 'Long break' : 'Short break'
                    }else if(seconds === 0){
                        seconds = 59
                        minutes--
                    }else seconds--
                }, 100);
                $pauseTimerButton.textContent = 'Pause'
            }
            if(e.target.textContent === 'Skip'){
                clearInterval(timer)
                $startTimerButton.disabled = false
                $pauseTimerButton.disabled = true
                $pauseTimerButton.textContent = 'Pause'
                $title.textContent = 'Work time'
                $minutes.textContent = repeats === 4 ? '15' : '5'
                $seconds.textContent = '00'
            }
        }
    })
}