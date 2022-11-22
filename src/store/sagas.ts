import {put, takeLatest, call, all, select } from 'redux-saga/effects';
import { getStore } from './store';
import {  searchCockTailsByLetter, searchCockTailsByIngredient, searchCockTails, DrinkRecipe } from '../IO/dataIO';
import {setResults} from './results'




function* fetchRecipes(args:any):any{
   
    const getFields = getStore().search;
    const state = getFields;
    let data;
    
    data =  yield call(() => searchCockTailsByLetter(state.searchField,state.searchType));
    
    yield put(setResults(data));
}

function* watchSearchChange(){
    yield takeLatest('search/setSearch',fetchRecipes);
}

export default function* rootSaga() {
    yield all([
        watchSearchChange()
    ])
}