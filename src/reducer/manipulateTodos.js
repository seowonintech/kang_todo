import * as action from '../action/action';

const manipulateTodos = (state = [], action) => {
  switch (action.type){
    // the action parameter
    // should be same as the returned values from action functions
    // such as addTodo, deleteTodo and toggleTodo except for type
    // ** actions param is action function itself **
    case action.ADD_TODO:
      return [
        ...state,
        {
          // values returned from addTodo action such as id and text, but no type.
          id
        }
      ]
    case action.DELETE_TODO:
    case action.TOGGLE_TODO:
  }
}