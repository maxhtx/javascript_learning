
let todoList = [];

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});


function sortTodoList() {
    if (todoList.length === 0) {
        return;
    }


    todoList.sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        if (dateA < dateB) {
            return -1;
        } else if (dateA > dateB) {
            return 1;
        }
        return 0;
    });
}

function addTodo() {

    const inputElement = document.querySelector('.js-todo-input');
    const name = inputElement.value;

    const dueDateElement = document.querySelector('.js-todo-date');
    const dueDate = dueDateElement.value;

    if (name === '') {
        alert('Please enter a task.');
        return;
    }

    if (dueDate === '') {
        alert('Please enter a date.');
        return;
    }

    todoList.push({
        name,
        dueDate
    });

    renderTodoList();

    inputElement.value = '';
    dueDateElement.value = '';
    sortTodoList();
}

function renderTodoList() {
    
    let todoListHTML = ''; 

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;


        const html = `
            <div class = "todo-name">${name}</div>
            <div class = "todo-due-date">${dueDate}</div>
            <button onclick = "
                todoList.splice(${i}, 1);
                renderTodoList();
            " class = "delete-button">Delete</button>
        `;
        todoListHTML += html;

    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

}
