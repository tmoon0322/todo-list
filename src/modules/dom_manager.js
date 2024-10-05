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
    }

    function submitProject(event) {
        event.preventDefault();
        const sideBar = document.querySelector('.sidebar');
        const title = document.getElementById('project_form').elements['title'].value
        const sideDiv = document.createElement('div');
        const project = document.createElement('p');
        project.textContent = title;
        sideBar.appendChild(sideDiv);
        sideDiv.appendChild(project);
        const newProject = TodoManager.createProject(title)
        displayTasks(newProject);
        projectDialog.close();
    }

    function displayAllTasks() {
        currentProject = null;
        const display = document.querySelector('.main_display');
        const testDiv = document.createElement('div');
        testDiv.style.height = '100px';
        display.appendChild(testDiv);
    }

    function displayTasks(project) {
        currentProject = project;
        clearMainDisplay();
        const display = document.querySelector('.main_display');
        const div = document.createElement('div');
        div.className = 'task';
        const titleElement = document.createElement('p');
        titleElement.textContent = project.name
        const dueDateElement = document.createElement('p');
        dueDateElement.textContent = 'tmrw'
        div.appendChild(titleElement);
        div.appendChild(dueDateElement);
        display.appendChild(div);
    }

    function showTaskDialog() {
        console.log('got here')
        if (currentProject != null) {
            taskDialog.showModal();
        }
    }

    function submitTask(event) {
        event.preventDefault();
        // START HERE!!!!!!!
        console.log('submitted the task :)')
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
})()
