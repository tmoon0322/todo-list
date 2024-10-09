import { TodoManager } from "./todo_manager";

export const DOMManager = (function () {

    let currentProject = null;
    const projectDialog = document.querySelector('.project_dialog');
    const taskDialog = document.querySelector('.task_dialog');
    const projectSubmit = document.querySelector('#project_submit');
    const projectCancel = document.querySelector('#project_cancel');
    const taskSubmit = document.querySelector('#task_submit');
    const taskCancel = document.querySelector('#task_cancel');
    projectSubmit.addEventListener('click', submitProject, false);
    projectCancel.addEventListener('click', closeDialog, false);
    taskSubmit.addEventListener('click', submitTask, false);
    taskCancel.addEventListener('click', closeDialog, false);
    const contentTitle = document.querySelector('.content_title');
    



    function init() {
        const newProjectButton = document.querySelector('.project_btn');
        const viewTasksButton = document.querySelector('.task_btn');
        const addTaskButton = document.querySelector('.new_task_btn');
        addTaskButton.addEventListener('click', showTaskDialog);
        newProjectButton.addEventListener('click', displayProject);
        viewTasksButton.addEventListener('click', displayAllTasks);
    }

    function displayProject() {
        projectDialog.showModal();
    }

    function closeDialog(event) {
        event.preventDefault();
        projectDialog.close();
        taskDialog.close();
        document.getElementById("task_form").reset();
        document.getElementById("project_form").reset();
    }

    function submitProject(event) {
        clearMainDisplay();
        event.preventDefault();
        const sideBar = document.querySelector('.sidebar');
        const title = document.getElementById('project_form').elements['title'].value
        const sideDiv = document.createElement('div');
        const project = document.createElement('p');
        sideDiv.className = 'project_label'
        project.textContent = title;
        sideBar.appendChild(sideDiv);
        sideDiv.appendChild(project);
        const newProject = TodoManager.createProject(title);
        sideDiv.addEventListener("click", () => {
            const project = newProject;
            displayTasks(project);
        });
        displayTasks(newProject);
        projectDialog.close();
        document.getElementById("project_form").reset();
    }

    function displayAllTasks() {
        currentProject = null;
        clearMainDisplay();
        const display = document.querySelector('.task_content');
        contentTitle.textContent = 'All Tasks:';
        for (const task of TodoManager.allTasks) {
            const div = document.createElement('div');
            div.className = 'task';
            const titleElement = document.createElement('p');
            titleElement.textContent = task.title;
            const dueDateElement = document.createElement('p');
            dueDateElement.textContent = task.dueDate;
            div.appendChild(titleElement);
            div.appendChild(dueDateElement);
            display.appendChild(div);
        }
    }

    function displayTasks(project) {
        currentProject = project;
        clearMainDisplay();
        const display = document.querySelector('.task_content');
        contentTitle.textContent = project.name;
        for (const task of project.taskList) {
            const div = document.createElement('div');
            div.className = 'task';
            const titleElement = document.createElement('p');
            titleElement.textContent = task.title;
            const dueDateElement = document.createElement('p');
            dueDateElement.textContent = task.dueDate;
            div.appendChild(titleElement);
            div.appendChild(dueDateElement);
            display.appendChild(div);
            div.addEventListener("click", () => {
                display.removeChild(div);
                TodoManager.deleteTask(project, task);
            });
        }
    }

    function showTaskDialog() {
        if (currentProject != null) {
            taskDialog.showModal();
        }
    }

    function submitTask(event) {
        event.preventDefault();
        const title = document.getElementById('task_form').elements['title'].value;
        const description = document.getElementById('task_form').elements['description'].value;
        const dueDate = document.getElementById('task_form').elements['dueDate'].value;
        const priority = document.getElementById('task_form').elements['priority'].value;
        TodoManager.addTask(currentProject, title, description, dueDate, priority);
        displayTasks(currentProject);
        taskDialog.close();
        document.getElementById("task_form").reset();
    }

    function clearMainDisplay() {
        const div = document.querySelector('.task_content');
        div.innerHTML = ''
    }

    return {
        init, 
        displayProject, 
        displayAllTasks, 
        displayTasks, 
        showTaskDialog,
        submitTask
    }
}());
