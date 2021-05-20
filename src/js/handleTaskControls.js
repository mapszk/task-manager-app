import getTasks from "./getTasks"
const $input = document.getElementById('task_input')
const $buttonForm = document.getElementById('submit_task')
const $showCompleted = document.getElementById('toggle_completed')

const handleDelete = (e) => {
    const id = e.target.parentElement.parentElement.previousElementSibling.dataset.id
    const tasks = getTasks()
    const newTasks = tasks.filter(task => task.id !== parseInt(id))
    e.target.parentElement.parentElement.parentElement.parentElement.remove()
    localStorage.setItem('tasks', JSON.stringify(newTasks))
}
const handleEdit = (e) => {
    const id = e.target.parentElement.parentElement.previousElementSibling.dataset.id 
    const tareaText = e.target.parentElement.parentElement.previousElementSibling.textContent.trim()
    $input.value = tareaText
    $buttonForm.textContent = 'Edit'
    $input.previousElementSibling.textContent = 'Edit task'
    document.getElementById('task_id').value = id
    document.querySelector('.task__panel').classList.add('active')
}
const handleToggle = (e) => {
    const id = e.target.parentElement.parentElement.previousElementSibling.dataset.id
    const tasks = getTasks()
    const newTasks = tasks.map(task => task.id === parseInt(id) ? {...task, completed: !task.completed} : task)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    e.target.parentElement.parentElement.parentElement.classList.toggle('completed')
    if($showCompleted.textContent === 'Show completed'){
        e.target.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
    }
}

export default function handleTaskControls() {
    document.addEventListener('click', e=>{
        e.preventDefault()
        switch (e.target.parentElement.id){
            case "delete_task":
                return handleDelete(e)
            case "edit_task":
                return handleEdit(e)
            case "toggle_task":
                return handleToggle(e)
            default: return
        }
    })
}