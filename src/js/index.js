import '../styles/main.scss'
import '../static/logo-ojo.png'
import '../static/favicon.ico'
import '../static/bell.mp3'

import handleTaskControls from './handleTaskControls'
import handleTaskPanel from './handleAddTask'
import loadTasks from './loadTasks'
import showCompleted from './showCompleted'
import timer from './timer'
import loadTimerConfig from './loadTimerConfig'

document.addEventListener('DOMContentLoaded', e=>{
    loadTasks()
    handleTaskControls()
    handleTaskPanel()
    showCompleted()
    loadTimerConfig()
    timer()
})