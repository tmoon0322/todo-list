import { TodoManager } from "./todo_manager";

export const DOMManager = (function () {

    let currentProject;
    const projectDialog = document.querySelector('.project_dialog');
    const taskDialog = document.querySelector('.task_dialog');

    function init() {
        const newProjectButton = document.querySelector('.project_btn')
        const viewTasksButton = document.querySelector('.task_btn')
        newProjectButton.addEventListener('click', displayProject)
        viewTasksButton.addEventListener('click', displayAllTasks)
    }

    function displayProject() {
        const projectDialog = document.querySelector('.project_dialog');
        const projectSubmit = document.querySelector('#project_submit');
        const projectCancel = document.querySelector('#project_cancel');
        projectSubmit.addEventListener('click', submitProject, false);
        projectCancel.addEventListener('click', closeProject, false);
        projectDialog.showModal();
    }

    function closeProject(event) {
        event.preventDefault();
        projectDialog.close();
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
        projectDialog.close()
    }

    function displayAllTasks() {
        const display = document.querySelector('.main_display');
        const testDiv = document.createElement('div');
        testDiv.style.height = '100px';
        display.appendChild(testDiv);
    }

    function displayTasks(project) {

    }

    function newTask(project) {
        
    }

    return { init, displayProject, displayAllTasks, displayTasks }
})()
