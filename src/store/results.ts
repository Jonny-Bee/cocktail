import {createSlice} from '@reduxjs/toolkit';
import { DrinkRecipe } from '../IO/dataIO';

interface resultsState {
    value?:DrinkRecipe[]
    
}

const initialState: resultsState = {
   
   value:[],
    
};

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers:
    {
        setResults(state,action){
            console.log(action);
            state.value = action.payload;
            
        }
    }
});

export const { setResults } = resultsSlice.actions;

export default resultsSlice.reducer;