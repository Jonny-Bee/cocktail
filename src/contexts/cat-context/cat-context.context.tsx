import React, { createContext, useEffect, useState, FC, ReactNode} from 'react';

import { useNavigate } from "react-router-dom";
import type {DrinkRecipe} from '../../IO/dataIO';


// define typed interface for context
interface IcatContextProps {
    searchField:string,
    searchType:string,
    selectedRecipe?:DrinkRecipe,
    setRecipe:(a:DrinkRecipe) => void,
    setSearch:(cat:string,stype:string) => void
}

// defined type context prover properties ! important
interface IProviderProps {
    children:ReactNode
}
export const CatContext = createContext<IcatContextProps>({
   searchField:'',
   searchType:'letter',
   
    setRecipe:() => {},
   
    setSearch:() => {}
});


export const CatProvider: FC<IProviderProps> = ({ children }) => {
    
   
    const [searchField, setSearchField] = useState<string>(localStorage.getItem('searchfield') || 'a');
    const [searchType, setSearchType] = useState<string>(localStorage.getItem('searchtype') || 'letter');
    const [selectedRecipe , updateRecipe] = useState<DrinkRecipe>(JSON.parse(localStorage.getItem('recipe_') || '') || null);

    useEffect(() => {
        localStorage.setItem('searchfield',searchField) ;
    },[searchField]);

    useEffect(() => {
        localStorage.setItem('searchtype',searchType) ;
    },[searchType]);

    useEffect(() => {
        console.log('saved recipe')
        localStorage.setItem('recipe_',JSON.stringify(selectedRecipe)) ;
    },[selectedRecipe]);

    const navigate = useNavigate();

    const setRecipe = (recipe:DrinkRecipe) =>{
        updateRecipe(recipe);
        console.log(recipe);
        navigate('/recipe');
    }
    
    const setSearch =( cat:string,stype:string) =>{
        console.log('set search params : ' + cat + ' : ' + stype)
        setSearchField(cat);
        setSearchType(stype);
        navigate('/list');
    }

    const value = {searchField,setSearch,searchType,selectedRecipe,setRecipe};
    return <CatContext.Provider value={value}>{children}</CatContext.Provider>
}
