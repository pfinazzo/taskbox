import TaskStore from "../../";

export default function pinTask(id) {
  const currentTasks = TaskStore.tasks;
  const taskToEdit = TaskStore.tasks.filter(task => task.id === id);
  const newTasks = currentTasks.filter(task => task.id !== id);
  taskToEdit.task.state = 'TASK_PINNED';
  const newPayload = [
    ...newTasks,
    taskToEdit
  ]
  TaskStore.tasks = newPayload;
}