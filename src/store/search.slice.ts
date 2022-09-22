import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SearchState {
    searchField:string,
    searchType:string
}

const initialState: SearchState = {
    searchField : '',
    searchType: 'letter'
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:
    {
        setSearch(state,action){
            console.log(action);
            state.searchField = action.payload.searchField;
            state.searchType = action.payload.searchType;
        }
    }
});


export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;