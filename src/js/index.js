import '../styles/main.scss'
import handleTaskControls from './handleTaskControls'
import handleTaskPanel from './handleAddTask'
import loadTasks from './loadTasks'
import showCompleted from './showCompleted'

document.addEventListener('DOMContentLoaded', e=>{
    loadTasks()
    handleTaskControls()
    handleTaskPanel()
    showCompleted()
})