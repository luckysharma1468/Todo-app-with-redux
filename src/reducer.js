import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "ToDo",
  initialState: {
    tasks: [],
    completedTasks: [],
    completeGroup: [],
  },

  reducers: {

    // Add a single task to store
    addTaskToTasks: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },

    // Remove single task from the store based on the id
    removeTaskFromTasks: (state, action) => {
      const newTasks = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = newTasks;
    },

    // Add a specific task back to ToDO List - In short mark a task again as incomplete
    putBacktoToDO: (state, action) => {
      const newTasks = state.completedTasks.filter(
        (task) => task.id === action.payload
      );
      const newCompletedTasks = state.completedTasks.filter(
        (task) => task.id !== action.payload
      );
      state.tasks = [...state.tasks, ...newTasks];
      state.completedTasks = newCompletedTasks;
    },

    // Mark a task as completed and put it in a completed tasks list
    setTaskAsCompleted: (state, action) => {
      const checkedTask = state.tasks.filter(
        (task) => task.id === action.payload
      );
      const newCompletedTasks = [...state.completedTasks, ...checkedTask];
      state.completedTasks = newCompletedTasks;
    },

    // For a group action - Put all selected tasks in the completed Group
    selectedTasks: (state, action) => {
      state.completeGroup = [...state.completeGroup, action.payload];
    },

    // Mark all selected item as completed - Group Action
    setGroupTasksAsCompleted: (state) => {
      const completedItems = state.tasks.filter((task) =>
        state.completeGroup.includes(task.id)
      );
      const removeFromToDo = state.tasks.filter(
        (task) => !state.completeGroup.includes(task.id)
      );
      state.completedTasks = [...state.completedTasks, ...completedItems];
      state.tasks = [...removeFromToDo];
      state.completeGroup = []
    },

    // Clear all the tasks from the list of tasks.
    clearAllTasks: (state) => {
        state.completedTasks = [];
    },
  },
});

export const {
  addTaskToTasks,
  removeTaskFromTasks,
  putBacktoToDO,
  setTaskAsCompleted,
  selectedTasks,
  setGroupTasksAsCompleted,
  clearAllTasks
} = taskSlice.actions;

export default taskSlice.reducer;
