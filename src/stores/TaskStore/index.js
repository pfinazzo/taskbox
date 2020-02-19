import { store } from "react-easy-state";
import * as methods from "./methods";

const TaskStore = store({
  loading: false,
  tasks: [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ],

  archiveTask: (id) => {
    return methods.archiveTask(id);
  },

  pinTask: (id) => {
    return methods.pinTask(id);
  }

});

export default TaskStore;