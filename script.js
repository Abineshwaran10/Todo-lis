// let amount = 1000
// console.log('your bill amount is ' + amount)

// //arithmetic operators
// let a = 5 + 3; // a will be 8

// let b = 10 - 4; // b will be 6

// //Increment (++):
// let num = 5;
// num++; // Increment num by 1
// console.log(num); // Output: 6

// //Decrement (--):
// let score = 8;
// score--; // Decrement score by 1
// console.log(score); // Output: 7

// //Increment in an Expression:
// let number = 10;
// let result = number++ + 2; // Use post-increment; result will be 5, num becomes 4
// console.log(result); // Output: 5
// console.log(number); // Output: 4
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const todoList = document.getElementById("todo-list");
    const logoutButton = document.getElementById("logout");
    const tasksList = document.getElementById("tasks");
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");

    // Check if the user is already logged in (you can use cookies or localStorage for this)
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
        // User is logged in
        signupForm.style.display = "none";
        loginForm.style.display = "none";
        todoList.style.display = "block";
    } else {
        // User is not logged in
        signupForm.style.display = "block";
        loginForm.style.display = "none";
        todoList.style.display = "none";
    }

    // Signup form submission
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Add your signup logic here
        // For this example, simulate a successful signup
        localStorage.setItem("isLoggedIn", "true");

        signupForm.style.display = "none";
        loginForm.style.display = "none";
        todoList.style.display = "block";
    });

    // Login form submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Add your login logic here
        // For this example, simulate a successful login
        localStorage.setItem("isLoggedIn", "true");

        signupForm.style.display = "none";
        loginForm.style.display = "none";
        todoList.style.display = "block";
    });

    // Logout functionality
    logoutButton.addEventListener("click", function() {
        localStorage.removeItem("isLoggedIn");
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        todoList.style.display = "none";
    });

    // Add task functionality
    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            tasksList.appendChild(listItem);
            taskInput.value = "";
        }
    });
});
