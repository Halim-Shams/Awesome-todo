export const reducer = (state, action) => {
  //   console.log("Reducer called with action:", action);

  if (action.type === "ADD_TASK") {
    const newTask = action.payload;
    // console.log("ADD_TASK action triggered");
    return {
      ...state,
      activities: [...state.activities, newTask],
      alertAction: "add",
      alertContent: "Task added",
      alert: true,
      validation: false,
    };
  }
  if (action.type === "NO_VALUE") {
    // console.log("NO_VALUE action triggered");
    return {
      ...state,
      validation: true,
      alertAction: "value",
      alertContent: "Enter a task",
      alert: true,
    };
  }
  if (action.type === "DELETE_TASK") {
    const id = action.payload;
    return {
      ...state,
      activities: state.activities.filter((task) => task.id !== id),
      alertAction: "delete",
      alertContent: "Task deleted",
      alert: true,
    };
  }
  if (action.type === "TOGGLE_THEME") {
    // console.log("TOGGLE_THEME action triggered");
    return {
      ...state,
      darkTheme: !state.darkTheme,
    };
  }
  if (action.type === "TIME_OUT") {
    if (state.validation) {
      return { ...state, validation: false };
    }
    return state;
  }
  if (action.type === "ALERT_OUT") {
    // console.log("ALERT_OUT action triggered");
    if (state.alert) {
      return {
        ...state,
        alert: false,
      };
    }
    return state;
  }
};
