export default function getTasks() {
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    return tasks
}