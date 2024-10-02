export class Project{
    constructor(name) {
        this.name = name;
        this.taskList = []; 
    }

    addTask(taskToAdd) {
        this.taskList.push(taskToAdd);
    }

    deleteTask(taskToDelete) {
        const index = this.taskList.indexOf(taskToDelete);
        if (index > -1) {
        this.taskList.splice(index, 1);
        }
    }
}
