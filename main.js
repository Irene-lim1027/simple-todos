let input = document.getElementById('todos');
let button = document.getElementById('btn');
let container = document.getElementById('todo-container');

button.addEventListener('click',()=> {
    let list = document.createElement('p');
    list.innerHTML = input.value;
    container.appendChild(list);
    input.value="";
    container.addEventListener('click',()=>{
        container.style.textDecoration="line-through"
    })
       container.addEventListener('dblclick',()=>{
        container.removeChild(list)
       })
})