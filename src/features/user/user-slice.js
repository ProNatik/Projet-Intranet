import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    
    initialState: {
        user: {}
    },
    
    reducers: {
        fetchLogin: (state, {payload})=> {
            state.user=payload;
        },
        
    }
});

/* Au singulier : il s'agit du reducer qui assemble les FONCTIONS "REDUCERS"
   renseignées au dessus. */
export const { fetchLogin } = userSlice.actions;
export default userSlice.reducer;