import TaskStore from "../../";

export default function archiveTask(id) {
  const currentTasks = TaskStore.tasks;
  const taskToEdit = TaskStore.tasks.filter(task => task.id === id);
  const newTasks = currentTasks.filter(task => task.id !== id);
  taskToEdit.task.state = 'TASK_ARCHIVED';
  const newPayload = [
    ...newTasks,
    taskToEdit
  ]
  TaskStore.tasks = newPayload;
}