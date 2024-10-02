import './style.css'
import { TodoManager } from './modules/todo_manager.js';

const gym = TodoManager.createProject('GYM!');
const coding = TodoManager.createProject('Coding');


console.log(gym)

TodoManager.addTask(gym, 'deadlift', 'yup', 'tmrw', 'high');

console.log(TodoManager.allProjects);
console.log(TodoManager.allTasks);











