export default function showCompleted(){
    document.addEventListener('click', e=>{
        if(e.target.id === 'toggle_completed' && e.target.textContent === 'Hide completed'){
            const $tasks = document.querySelectorAll('.task')
            const $hideButton = document.getElementById('toggle_completed')
            $tasks.forEach(task => {
                if(task.classList.contains('completed')){
                    task.parentElement.style.display = 'none'
                }
            })
            $hideButton.textContent = 'Show completed'
            return
        }
        if(e.target.id === 'toggle_completed' && e.target.textContent === 'Show completed'){
            const $tasks = document.querySelectorAll('.task')
            const $hideButton = document.getElementById('toggle_completed')
            $tasks.forEach(task => {
                if(task.classList.contains('completed')){
                    task.parentElement.style.display = 'block'
                }
            })
            $hideButton.textContent = 'Hide completed'
            return
        }
    })
}