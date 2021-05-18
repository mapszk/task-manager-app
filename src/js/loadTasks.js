import getTasks from "./getTasks"

export default function loadTasks(){
    const tasks = getTasks()
    const fragment = document.createDocumentFragment()
    tasks.forEach(task => {
        const li = document.createElement('li')
        li.classList.add('task__li')
        li.innerHTML = `
            <div class="task ${task.completed ? 'completed' : null}">
                <div class="task__text" data-id="${task.id}">
                    ${task.text}
                </div>
                <div class="task__controls">
                    <button id="toggle_task"><i class="fas fa-check"></i></button>
                    <button id="edit_task"><i class="fas fa-edit"></i></button>
                    <button id="delete_task"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `
        fragment.appendChild(li)
    })
    const $ul = document.querySelector('.tasks__list')
    $ul.appendChild(fragment)
}