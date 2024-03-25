//are reducer takes to thinks 1st is state and 2nd is called an actions

export const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: action.payload };

    case "REMOVE_TODO":
      return { todos: action.payload };

    default:
      return state;
  }
};
