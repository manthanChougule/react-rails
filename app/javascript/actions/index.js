import types from './type'

const addUser = (values) => {
  return  {
    type: types.ADD_USER,
    payload: values
  }
}

const deleteUser = (user) => {
  return {
    type: types.DELETE_USER,
    payload: user.id
  }
}

const editUser = (user) => {
  return {
    type: types.EDIT_USER,
    payload: user.id
  }
}

const update = (user) => {
  return {
    type: types.UPDATE,
    payload: user
  }
} 

export default {
  addUser,
  deleteUser,
  editUser,
  update
}