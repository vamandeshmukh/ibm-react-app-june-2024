
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        loggedInUser: '',
        loginStatus: 'false'
    },
    reducers: {
        userLogin: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.loggedInUser = action.payload;
        },
        userLogout: () => { 
            
        }
        // , other reducers 
    }
});

export default UserSlice.reducer;

export const { userLogin, userLogout } = UserSlice.actions;
