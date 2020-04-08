export const pageReducer = (state = [], action ) => {
    switch(action.type) {
        case 'ADD_USER':
            return state.concat([action.data]);
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
                        email:action.data.newEmail,
                        bithdate:action.data.newBirthdate,
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
