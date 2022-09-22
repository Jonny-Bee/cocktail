import { configureStore} from '@reduxjs/toolkit';

import recipeSlice from './recipe.slice';
import searchSlice from './search.slice';

// set up persistence
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';



const persistConfig = {
    key: 'root',
    storage,
  }
const persistedRecipeReducer = persistReducer(persistConfig, recipeSlice)
const persistedSearchReducer = persistReducer(persistConfig, searchSlice)

export const store = configureStore({
    reducer :{
        search:persistedSearchReducer,
        recipe:persistedRecipeReducer
    }
})
export const persistor = persistStore(store);
export type appDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


