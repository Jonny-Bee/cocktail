
export const searchCockTailsByLetter = (letter,onLoaded) =>{

    try{
        console.log('loading...')
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter)
        .then(res => res.json())
        .then(drinks => {onLoaded(drinks)});
    }
    catch(error)
    {
        console.log(error);
    }
}
export const searchCockTails = (letter,onLoaded) =>{

    try{
        console.log('loading...')
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + letter)
        .then(res => res.json())
        .then(drinks => {onLoaded(drinks)});
    }
    catch(error)
    {
        console.log(error);
    }
}

export const searchCockTailsByIngredient = (name,onLoaded) =>{

    try{
       fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
       .then(res => res.json())
       .then(drinks => {onLoaded(drinks)});
        
        
    }
    catch(error)
    {
        console.log(error);
    }
}

export const getCocktailById = (id,onLoaded) =>{

    try{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
        .then(res => res.json())
        .then(drinks => {onLoaded(drinks)});
    }
    catch(error)
    {
        console.log(error);
    }
}

export const getIngredientDetails = (ingredient,onLoaded) =>{

    try{
        
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingredient)
        .then(res => res.json())
        .then(drinks => {onLoaded(drinks)});
    }
    catch(error)
    {
        console.log(error);
    }
}