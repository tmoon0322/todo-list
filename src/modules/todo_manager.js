import { Task } from './task.js';
import { Project } from './project.js';

export const TodoManager = (function() {
    const allTasks = [];
    const allProjects = [];

    function createProject(title) {
        const project = new Project(title);
        allProjects.push(project);
        return project
    }

    function addTask(project, title, description, dueDate, priority) { 
        const task = new Task(title, description, dueDate, priority);
        allTasks.push(task);
        project.taskList.push(task);
    }

    return {createProject, addTask, allProjects, allTasks}
})()