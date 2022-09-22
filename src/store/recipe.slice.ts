import {createSlice} from '@reduxjs/toolkit';
import { DrinkRecipe } from '../IO/dataIO';

interface recipeState {
    value?:DrinkRecipe
    
}

const initialState: recipeState = {
   
    
};

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers:
    {
        setRecipe(state,action){
            console.log(action);
            state.value = action.payload;
            
        }
    }
});

export const { setRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;