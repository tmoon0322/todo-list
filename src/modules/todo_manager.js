import { Task } from './task';
import { Project } from './project';

export const TodoManager = (function() {
    const allTasks = [];

    function createProject(title) {
        const project = new Project(title);
        return project
    }

    function addTask(project, title, description, dueDate, priority) { 
        const task = new Task(title, description, dueDate, priority);
        allTasks.push(task);
        project.taskList.push(task);
    }

    function deleteTask(project, taskToDelete) {
            const index = project.taskList.indexOf(taskToDelete);
        if (index > -1) {
        project.taskList.splice(index, 1);
        }
        const allIndex = allTasks.indexOf(taskToDelete);
        if (index > -1) {
        allTasks.splice(allIndex, 1);
        }
    }

    return {createProject, addTask, allTasks, deleteTask}
})()