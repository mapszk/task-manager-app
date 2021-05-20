import getTasks from './getTasks'

const addTask = (e) => {
    const taskId = e.target.parentElement.previousElementSibling.value || Date.now()
    const taskText = e.target.parentElement.previousElementSibling.previousElementSibling.value
    const newTask = {text: taskText.trim(), id: taskId, completed: false}
    const tasks = getTasks()
    tasks.push(newTask)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    document.querySelector('.task__panel').classList.remove('active')
    document.body.style.position = 'initial';
    location.reload()
}
const editTask = (e) => {
    console.log(e.target.parentElement.previousElementSibling.previousElementSibling.value)
    const id = parseInt(e.target.parentElement.previousElementSibling.value)
    const text = e.target.parentElement.previousElementSibling.previousElementSibling.value
    const tasks = getTasks()
    const newTasks = tasks.map(task => task.id === id ? {text, id} : task)
    localStorage.setItem('tasks', JSON.stringify(newTasks))

    document.querySelector('.task__panel').classList.remove('active')
    location.reload()
}

export default function handleTaskPanel() {
    document.addEventListener('click', e=>{
        if(e.target.parentElement.id === 'add_task'){
            e.preventDefault()
            document.getElementById('task_input').value = ''
            document.getElementById('task_id').value = null
            document.getElementById('submit_task').textContent = 'Add'
            document.getElementById('form__label').textContent = 'New task'
            document.querySelector('.task__panel').classList.add('active')
        }
        if(e.target.id === 'cancel_task'){
            e.preventDefault()
            document.querySelector('.task__panel').classList.remove('active')
        }
        if(e.target.id === 'submit_task'){
            e.preventDefault()
            if(document.getElementById('submit_task').textContent === 'Add') return addTask(e)
            if(document.getElementById('submit_task').textContent === 'Edit') return editTask(e)
        }
    })
}