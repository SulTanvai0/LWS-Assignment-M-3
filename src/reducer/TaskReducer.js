// Importing the getTaskData function from the data module
import { getTaskData } from "../assets/data/data";

// Initial state for the task reducer
const initialState = {
  taskData: [...getTaskData()],
};

// Task reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        ...state,
        taskData: [...state.taskData, action.payload],
      };
    }

    case "EDIT_TASK": {
      const editedData = state.taskData.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
      return {
        ...state,
        taskData: editedData,
      };
    }

    case "SEARCH": {
      if (action.payload.length === 0) {
        // If search query is empty, return the original state
        return {
          ...state,
        };
      } else {
        // Filter taskData based on the search query
        const filtered = getTaskData().filter((task) =>
          task.title.toLowerCase().includes(action.payload)
        );
        return {
          ...state,
          taskData: filtered,
        };
      }
    }

    case "IS_FAVORITE": {
      const newArray = state.taskData.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return {
        ...state,
        taskData: newArray,
      };
    }

    case "DELETE_BY_TASK": {
      return {
        ...state,
        taskData: state.taskData.filter((item) => item.id !== action.payload),
      };
    }

    case "DELETE_ALL": {
      return {
        taskData: [],
      };
    }

    default:
      return state;
  }
};

// Exporting the initial state and task reducer
export { initialState, taskReducer };
