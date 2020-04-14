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

export default {
  addUser,
  deleteUser,

}