// Retrieve todos from local storage
function getTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    return todos;
  }
  
  // Save todos to local storage
  function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  // Render todos on the page
  function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
  
    const todos = getTodos();
    todos.forEach((todo, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${todo}</span>
        <button onclick="deleteTodo(${index})">Delete</button>
      `;
      todoList.appendChild(listItem);
    });
  }
  
  // Add a new todo to the list
  function addTodo() {
    const newTodoInput = document.getElementById('newTodo');
    const newTodo = newTodoInput.value.trim();
  
    if (newTodo) {
      const todos = getTodos();
      todos.push(newTodo);
      saveTodos(todos);
      renderTodos();
      newTodoInput.value = '';
    }
  }
  
  // Delete a todo from the list
  function deleteTodo(index) {
    const todos = getTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos();
  }
  
  // Initial rendering
  renderTodos();
  