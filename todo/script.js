

const TodoInput=document.getElementById("todo-input")
const AddTask=document.getElementById("add-btn")
const TodoList=document.getElementById("todo-list")


let Tasks=[]
AddTask.addEventListener("click", ()=>{
    const TaskText=TodoInput.value.Trim();

    if(TaskText==="") return ;

    const newTask{
        id:Date.now(),
        text=TaskText,
        completed:false
    }

    Tasks.save(newTask)
    



})


