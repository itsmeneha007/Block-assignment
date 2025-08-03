const input = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

addTaskBtn.addEventListener('click', () => {
    const taskTaxt = input.value.trim()

    if(taskTaxt === ''){
        alert('Please enter task')
        return
    }
    const li = document.createElement('li')
    li.textContent = taskTaxt

    const completeBtn = document.createElement('button')
    completeBtn.textContent = 'Complete'
    completeBtn.addEventListener('click', ()=>{
        li.classList.toggle('completed')
    })
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', ()=>{
        taskList.removeChild(li);
    })

     li.appendChild(completeBtn);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      input.value = ''
})