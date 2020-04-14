

const initialState = {
  users: []
};

export default function userReducer(state = initialState, action ){
	switch(action.type) {
		case 'ADD_USER':
			return state.concat([action.payload]); // state.concat([action.payload])
		case 'DELETE_USER':
			return state.filter((user) => user.id !== action.id);
		case 'EDIT_USER':
			return state.map((user) => user.id === action.id ?
											{...user,editing:!user.editing}:user);
		case 'UPDATE':
			return state.map((user) => {
				if(user.id === action.id){
          return {
            ...user,
            firstname:action.data.newFirstName,
            lastname:action.data.newLastName,
            contact:action.data.newContact,
            address:action.data.newAddress,
            editing:!user.editing
          }
				} else return user;
			})
		default:
			return state;
	}
}