import React, { createContext, useEffect, useState, FC, ReactNode, useReducer, Reducer} from 'react';

import { useNavigate } from "react-router-dom";
import type {DrinkRecipe} from '../../IO/dataIO';


// define typed interface for context
interface IcatContextProps {
    searchField?:string,
    searchType?:string,
    selectedRecipe?:DrinkRecipe,
    setRecipe:(a:DrinkRecipe) => void,
    setSearch:(cat:string,stype:string) => void
}

// define type context provider properties ! important
interface IProviderProps {
    children:ReactNode
}
export const CatContext = createContext<IcatContextProps>({
   searchField:'',
   searchType:'letter',
   
    setRecipe:() => {},
   
    setSearch:() => {}
});

export const CatContextActionTypes = {
    SET_SEARCH:'SET_SEARCH_FIELD',
    SELECT_RECIPE:'SELECT_RECIPE'
}

type catState = {
    searchField?:string,
    searchType?:string,
    selectedRecipe?:DrinkRecipe
}
    

export type CatContextAction = {
    payload: catState,
    actionType:string
}

const catReducer:Reducer<catState,CatContextAction> = (state:catState, action:CatContextAction) =>{

    switch(action.actionType)
    {
        case CatContextActionTypes.SET_SEARCH:
            return {...state,...action.payload};
        case CatContextActionTypes.SELECT_RECIPE:
            return {...state,...action.payload};
        default :
            throw new Error(`unhandled type ${action.actionType}`)
    }
}

const InitialState = {
    searchField:'',
    searchType:'letter'
}
export const CatProvider: FC<IProviderProps> = ({ children }) => {
    
    const [{searchField , searchType, selectedRecipe} , dispatch] = useReducer(catReducer, InitialState)
 

    useEffect(() => {
        console.log('saved recipe')
        localStorage.setItem('recipe_',JSON.stringify(selectedRecipe)) ;
    },[selectedRecipe]);

    const navigate = useNavigate();

    const setRecipe = (recipe:DrinkRecipe) =>{
        dispatch({actionType:CatContextActionTypes.SELECT_RECIPE,payload:{selectedRecipe:recipe}});
        navigate('/recipe');
        
    }
    
    const setSearch =( cat:string,stype:string) =>{
        dispatch({actionType:CatContextActionTypes.SET_SEARCH,payload:{searchType:stype,searchField:cat}});
        navigate('/list');
    }

    const value = {searchField,setSearch,searchType,selectedRecipe,setRecipe};
    return <CatContext.Provider value={value}>{children}</CatContext.Provider>
}
