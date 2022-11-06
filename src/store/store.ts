import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import recipeSlice from './recipe.slice';
import searchSlice from './search.slice';
import results from './results'
import  rootSaga  from './sagas'

// set up persistence
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import createSagaMiddleware from '@redux-saga/core';



const persistConfig = {
    key: 'root',
    storage,
    blacklist:['results'],
  }
const sagaMiddleware = createSagaMiddleware();
const persistedRecipeReducer = persistReducer(persistConfig, recipeSlice)
const persistedSearchReducer = persistReducer(persistConfig, searchSlice)
const persistedResultsReducer = persistReducer(persistConfig, results)

export const store = configureStore({
    reducer :{
        search:persistedSearchReducer,
        recipe:persistedRecipeReducer,
        results:persistedResultsReducer,
    },
    middleware:[...getDefaultMiddleware(), sagaMiddleware]
})
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export type appDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const getStore = () => store.getState() ;


