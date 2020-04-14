export const addUser = (values) => {
  return (dispatch) => {
    dispatch({type: 'ADD_USER',
          payload: values});
  }
} 

export const deleteUser = () => {
  return (dispatch) => {
    dispatch({
      type: 'DELETE_USER',
    })
  }
}

export const addUsers = (values) => {
    return {
      type: "ADD_USER",
      values: values
    }
}