

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo');
const categoryInput = document.getElementById('category');
const dateInput = document.getElementById('date'); // New input field for date
const timeInput = document.getElementById('time'); // New input field for time
const errorMsg = document.getElementById('error-msg');
const todoList = document.getElementById('todo-list');
const filterCategory = document.getElementById('filter-category');

// Get existing todos from local storage or create an empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Function to save todos to local storage
function saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to add a new todo item
function addTodo(event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();
    const categoryText = categoryInput.value.trim();

    if (!todoText || !categoryText) {
        errorMsg.textContent = 'Please enter both Todo and Category.';
        return;
    }

    errorMsg.textContent = '';

    const todoItem = {
        id: Date.now(),
        todo: todoText,
        category: categoryText,
    };

    todos.push(todoItem);
    saveTodosToLocalStorage();

    displayTodos();
    populateFilterCategories();

    todoInput.value = '';
    categoryInput.value = '';
}

// Function to delete a todo item
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodosToLocalStorage();
    displayTodos();
    populateFilterCategories();
}

// Function to edit a todo item
function editTodo(id) {
    const newTodoText = prompt('Edit the Todo:');
    const newCategoryText = prompt('Edit the Category:');

    if (newTodoText && newCategoryText) {
        const index = todos.findIndex(todo => todo.id === id);
        todos[index].todo = newTodoText;
        todos[index].category = newCategoryText;
        saveTodosToLocalStorage();
        displayTodos();
        populateFilterCategories();
    }
}
 // Function to add a new todo item
 function addTodo(event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();
    const categoryText = categoryInput.value.trim();
    const dateText = dateInput.value.trim(); // Get the value of the new date input field
    const timeText = timeInput.value.trim(); // Get the value of the new time input field

    if (!todoText || !categoryText || !dateText || !timeText) { // Check if any field is empty
        errorMsg.textContent = 'Please enter Todo, Category, Date, and Time.';
        return;
    }

    errorMsg.textContent = '';

    const todoItem = {
        id: Date.now(),
        todo: todoText,
        category: categoryText,
        date: dateText, // Include the date in the todo item
        time: timeText, // Include the time in the todo item
    };

    todos.push(todoItem);
    saveTodosToLocalStorage();

    displayTodos();
    populateFilterCategories();

    todoInput.value = '';
    categoryInput.value = '';
    dateInput.value = ''; // Clear the value of the date input field
    timeInput.value = ''; // Clear the value of the time input field
}

// Function to populate categories in the filter dropdown
function populateFilterCategories() {
    const categories = todos.map(todo => todo.category);
    const uniqueCategories = [...new Set(categories)];

    // Clear existing options
    filterCategory.innerHTML = '';

    // Add 'All' option
    const allOption = document.createElement('option');
    allOption.textContent = 'All';
    allOption.value = 'all';
    filterCategory.appendChild(allOption);

    // Add category options
    uniqueCategories.forEach(category => {
        const option = document.createElement('option');
        option.textContent = category;
        option.value = category;
        filterCategory.appendChild(option);
    });
}

// Function to display filtered todos
function displayFilteredTodos(category) {
    todoList.innerHTML = '';

    if (todos.length === 0) {
        todoList.innerHTML = '<p>No todos yet. Add some!</p>';
        return;
    }

    todos.forEach(todo => {
        if (category === 'all' || todo.category === category) {
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('todo');

            const todoText = document.createElement('span');
            todoText.textContent = todo.todo;
            const categoryText = document.createElement('span');
            categoryText.textContent = todo.category;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTodo(todo.id));

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editTodo(todo.id));

            todoDiv.appendChild(todoText);
            todoDiv.appendChild(categoryText);
            todoDiv.appendChild(deleteButton);
            todoDiv.appendChild(editButton);

            todoList.appendChild(todoDiv);
        }
    });
}

// Function to display todos
function displayTodos() {
    todoList.innerHTML = '';

    if (todos.length === 0) {
        todoList.innerHTML = '<p>No todos yet. Add some!</p>';
        return;
    }

    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const todoText = document.createElement('span');
        todoText.textContent = todo.todo;
        const categoryText = document.createElement('span');
        categoryText.textContent = todo.category;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(todo.id));

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTodo(todo.id));

        todoDiv.appendChild(todoText);
        todoDiv.appendChild(categoryText);
        todoDiv.appendChild(deleteButton);
        todoDiv.appendChild(editButton);

        todoList.appendChild(todoDiv);
    });
}

// Load todos from local storage and display them
displayTodos();
populateFilterCategories();

todoForm.addEventListener('submit', addTodo);
filterCategory.addEventListener('change', () => displayFilteredTodos(filterCategory.value));
 // Function to display filtered todos with even date and time
 function displayFilteredTodosWithEvenDateTime(category) {
    todoList.innerHTML = '';

    if (todos.length === 0) {
        todoList.innerHTML = '<p>No todos yet. Add some!</p>';
        return;
    }

    todos.forEach(todo => {
        if ((category === 'all' || todo.category === category) && isEvenDateTime(todo.date, todo.time)) {
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('todo');

            const todoText = document.createElement('span');
            todoText.textContent = todo.todo;
            const categoryText = document.createElement('span');
            categoryText.textContent = todo.category;
            const dateTimeText = document.createElement('span');
            dateTimeText.textContent = `Date: ${todo.date}, Time: ${todo.time}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTodo(todo.id));

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editTodo(todo.id));

            todoDiv.appendChild(todoText);
            todoDiv.appendChild(categoryText);
            todoDiv.appendChild(dateTimeText);
            todoDiv.appendChild(deleteButton);
            todoDiv.appendChild(editButton);

            todoList.appendChild(todoDiv);
        }
    });
}

// Function to check if the date and time are even
function isEvenDateTime(date, time) {
    const dateTime = new Date(`${date}T${time}`);
    return dateTime.getTime() % 2 === 0;
}

// ... (previous JavaScript code) ...

// Function to display todos
function displayTodos() {
    todoList.innerHTML = '';

    if (todos.length === 0) {
        todoList.innerHTML = '<p>No todos yet. Add some!</p>';
        return;
    }

    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const todoText = document.createElement('span');
        todoText.textContent = todo.todo;
        const categoryText = document.createElement('span');
        categoryText.textContent = todo.category;
        const dateTimeText = document.createElement('span');
        dateTimeText.textContent = `Date: ${todo.date}, Time: ${todo.time}`;

        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.checked = todo.completed;
        completeCheckbox.addEventListener('change', () => toggleComplete(todo.id));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(todo.id));

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTodo(todo.id));

        todoDiv.appendChild(completeCheckbox);
        todoDiv.appendChild(todoText);
        todoDiv.appendChild(categoryText);
        todoDiv.appendChild(dateTimeText);
        todoDiv.appendChild(deleteButton);
        todoDiv.appendChild(editButton);

        todoList.appendChild(todoDiv);
    });
}

// Function to toggle the completion status of a todo
function toggleComplete(id) {
    const index = todos.findIndex(todo => todo.id === id);
    todos[index].completed = !todos[index].completed;
    saveTodosToLocalStorage();
    displayTodos();
    populateFilterCategories();
}

// ... (rest of the JavaScript code) ...

displayTodos();
populateFilterCategories();

todoForm.addEventListener('submit', addTodo);
filterCategory.addEventListener('change', () => displayFilteredTodos(filterCategory.value));
// Function to display filtered todos with even date and time
function displayFilteredTodosWithEvenDateTime(category) {
    // ... (previous code) ...
}

filterCategory.addEventListener('change', () => displayFilteredTodosWithEvenDateTime(filterCategory.value));




// Function to display completed and uncompleted todos
function displayTodos() {
    const completedTodoList = document.getElementById('completed-todo-list');
    const uncompletedTodoList = document.getElementById('uncompleted-todo-list');

    completedTodoList.innerHTML = '';
    uncompletedTodoList.innerHTML = '';

    if (todos.length === 0) {
        completedTodoList.innerHTML = '<p>No todos yet. Add some!</p>';
        uncompletedTodoList.innerHTML = '<p>No todos yet. Add some!</p>';
        return;
    }

    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const todoText = document.createElement('span');
        todoText.textContent = todo.todo;
        const categoryText = document.createElement('span');
        categoryText.textContent = todo.category;
        const dateTimeText = document.createElement('span');
        dateTimeText.textContent = `Date: ${todo.date}, Time: ${todo.time}`;

        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.checked = todo.completed;
        completeCheckbox.addEventListener('change', () => toggleComplete(todo.id));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(todo.id));

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTodo(todo.id));

        todoDiv.appendChild(completeCheckbox);
        todoDiv.appendChild(todoText);
        todoDiv.appendChild(categoryText);
        todoDiv.appendChild(dateTimeText);
        todoDiv.appendChild(deleteButton);
        todoDiv.appendChild(editButton);

        if (todo.completed) {
            completedTodoList.appendChild(todoDiv);
        } else {
            uncompletedTodoList.appendChild(todoDiv);
        }
    });
}

// ... (rest of the JavaScript code) ...

displayTodos();
populateFilterCategories();

todoForm.addEventListener('submit', addTodo);
filterCategory.addEventListener('change', () => displayFilteredTodos(filterCategory.value));
// Function to display filtered todos with even date and time
function displayFilteredTodosWithEvenDateTime(category) {
    // ... (previous code) ...
}

filterCategory.addEventListener('change', () => displayFilteredTodosWithEvenDateTime(filterCategory.value));



