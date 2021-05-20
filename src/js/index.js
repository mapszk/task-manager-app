import '../styles/main.scss'
import '../static/logo-ojo.png'
import handleTaskControls from './handleTaskControls'
import handleTaskPanel from './handleAddTask'
import loadTasks from './loadTasks'
import showCompleted from './showCompleted'
import timer from './timer'

document.addEventListener('DOMContentLoaded', e=>{
    loadTasks()
    handleTaskControls()
    handleTaskPanel()
    showCompleted()
    timer()
})