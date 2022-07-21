import { createContext, useEffect, useState} from 'react';
import { getIngredientDetails, searchCockTailsByLetter, searchCockTailsByIngredient, getCocktailById } from '../../IO/dataIO';
import { useNavigate } from "react-router-dom";

export const CatContext = createContext({
    
    searchField:null,
    searchType:null,
   
    selectedRecipe:{},
    setRecipe:() => {},
   
    setSearch:() => {}

});


export const CatProvider = ({ children }) => {
     
    const [searchField, setSearchField] = useState(localStorage.getItem('searchfield') || 'a');
    const [searchType, setSearchType] = useState(localStorage.getItem('searchtype') || 'letter');
    const [selectedRecipe , updateRecipe] = useState(JSON.parse(localStorage.getItem('recipe_')) || null);

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

    const setRecipe = (recipe) =>{
        updateRecipe(recipe);
        console.log(recipe);
        navigate('/recipe');
    }
    
    const setSearch =( cat,stype) =>{
        console.log('set search params : ' + cat + ' : ' + stype)
        setSearchField(cat);
        setSearchType(stype);
        navigate('/list');
    }

    const value = {searchField,setSearch,searchType,selectedRecipe,setRecipe};
    return <CatContext.Provider value={value}>{children}</CatContext.Provider>
}
