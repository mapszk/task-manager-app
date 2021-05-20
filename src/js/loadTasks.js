import getTasks from "./getTasks"

export default function loadTasks(){
    const $ul = document.querySelector('.tasks__list')
    const tasks = getTasks()
    const fragment = document.createDocumentFragment()
    if(tasks.length === 0){
        $ul.innerHTML = `
            <div class="empty">
                <i class="far fa-clipboard"></i>
                <span>Start adding some tasks!</span>
            </div>
        `
    }else{
        tasks.forEach(task => {
            const li = document.createElement('li')
            li.classList.add('task__li')
            li.innerHTML = `
                <div class="task ${task.completed ? 'completed' : ''}">
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
        $ul.appendChild(fragment)
    }
}