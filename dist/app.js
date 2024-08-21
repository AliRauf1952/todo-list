const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const dueDateInput = document.getElementById('due-date');
const reminderDateInput = document.getElementById('reminder-date');
const categorySelect = document.getElementById('category-select');
const prioritySelect = document.getElementById('priority-select');
const taskList = document.getElementById('task-list');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const searchInput = document.getElementById('search-input');
const filterCategory = document.getElementById('filter-category');
const filterPriority = document.getElementById('filter-priority');
const exportTasksButton = document.getElementById('export-tasks');

const tasks = [];

function addTask(task) {
    tasks.push(task);
    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = '';

    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = filterCategory.value;
    const selectedPriority = filterPriority.value;

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.text.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || task.category === selectedCategory;
        const matchesPriority = !selectedPriority || task.priority === selectedPriority;
        return matchesSearch && matchesCategory && matchesPriority;
    });

    filteredTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <div class="task-header">
                <span class="task-title">${task.text}</span>
                ${task.reminderDate ? `<span class="task-reminder">Reminder: ${new Date(task.reminderDate).toLocaleString()}</span>` : ''}
                <button class="add-sub-task">Add Sub-task</button>
            </div>
            <div class="progress-container">
                <div class="progress-bar" style="width: ${task.progress}%;"></div>
            </div>
            <ul class="sub-task-list"></ul>
            <button class="remove-task">Remove Task</button>
        `;

        const addSubTaskButton = taskItem.querySelector('.add-sub-task');
        const removeTaskButton = taskItem.querySelector('.remove-task');

        addSubTaskButton.addEventListener('click', () => {
            const subTaskText = prompt('Enter sub-task:');
            if (subTaskText) {
                const newSubTask = { text: subTaskText, progress: 0 };
                task.subTasks.push(newSubTask);
                displayTasks();
            }
        });

        removeTaskButton.addEventListener('click', () => {
            const index = tasks.indexOf(task);
            if (index !== -1) {
                tasks.splice(index, 1);
                displayTasks();
            }
        });

        const subTaskList = taskItem.querySelector('.sub-task-list');

        task.subTasks.forEach(subTask => {
            const subTaskItem = document.createElement('li');
            subTaskItem.classList.add('sub-task-item');
            subTaskItem.innerHTML = `
                <input type="text" class="sub-task-input" value="${subTask.text}">
                <input type="range" min="0" max="100" value="${subTask.progress}">
            `;

            const subTaskInput = subTaskItem.querySelector('.sub-task-input');
            const progressInput = subTaskItem.querySelector('input[type="range"]');

            progressInput.addEventListener('input', () => {
                subTask.progress = parseInt(progressInput.value, 10);
                displayTasks();
            });

            subTaskInput.addEventListener('input', () => {
                subTask.text = subTaskInput.value;
                displayTasks();
            });

            subTaskList.appendChild(subTaskItem);
        });

        taskList.appendChild(taskItem);
    });
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value;
    const dueDate = dueDateInput.value;
    const reminderDate = reminderDateInput.value;
    const category = categorySelect.value;
    const priority = prioritySelect.value;

    if (taskText && dueDate && category && priority) {
        addTask({ text: taskText, dueDate, reminderDate, category, priority, subTasks: [], progress: 0 });
        taskForm.reset();
    }
});

searchInput.addEventListener('input', displayTasks);
filterCategory.addEventListener('change', displayTasks);
filterPriority.addEventListener('change', displayTasks);

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});

exportTasksButton.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(tasks, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tasks.json';
    a.click();
    URL.revokeObjectURL(url);
});

function showNotification(title, body) {
    if (Notification.permission === 'granted') {
        new Notification(title, { body });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(title, { body });
            }
        });
    }
}

function checkReminders() {
    tasks.forEach(task => {
        if (task.reminderDate) {
            const reminderDate = new Date(task.reminderDate);
            const now = new Date();
            const timeDiff = reminderDate.getTime() - now.getTime();

            if (timeDiff > 0 && timeDiff < 60000) { // Remind if within 1 minute
                showNotification('Reminder', `Task due: ${task.text}`);
            }
        }
    });
}

// Check reminders every minute
setInterval(checkReminders, 60000);

displayTasks();
