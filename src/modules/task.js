export class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
    }

    completeTask() {
        this.isComplete = true;
    }

    undoTask() {
        this.isComplete = false;
    }

    editTask(title = this.title, description = this.description, dueDate = this.dueDate, priority = this.priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}