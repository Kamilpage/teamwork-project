const todoList = ['first email', 'hello'];

renderTodoList();

function renderTodoList() {


    let todoListHTML = ``;


    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `
        <p>
        ${todo} 
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();        
        ">Delete</button>
        </p>
        `;
        todoListHTML += html;


    }
    console.log(todoListHTML);
    document.querySelector('.email-adress-text')
        .innerHTML = todoListHTML;
}




function addEmail() {
    const inputElement = document.querySelector('.email-btn');
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();

}