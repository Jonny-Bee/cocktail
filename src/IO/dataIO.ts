// ugly interface due to unpleasant shape of data :(
export interface DrinkRecipe  {
    [key: string]: string | undefined;
    idDrink:string,
    strAlcoholic?:string,
    strCatagory:string,
    strDrink:string,
    strDrinkThumb:string,
    strIngredient1?:string,
    strIngredient2?:string,
    strIngredient3?:string,
    strIngredient4?:string,
    strIngredient5?:string,
    strIngredient6?:string,
    strIngredient7?:string,
    strIngredient8?:string,
    strIngredient9?:string,
    strIngredient10?:string,
    strIngredient11?:string,
    strIngredient12?:string,
    strIngredient13?:string,
    strIngredient14?:string,
    strIngredient15?:string,
    strInstructions:string,
    strMeasure1?:string,
    strMeasure2?:string,
    strMeasure3?:string,
    strMeasure4?:string,
    strMeasure5?:string,
    strMeasure6?:string,
    strMeasure7?:string,
    strMeasure8?:string,
    strMeasure9?:string,
    strMeasure10?:string,
    strMeasure11?:string,
    strMeasure12?:string,
    strMeasure13?:string,
    strMeasure14?:string,
    strMeasure15?:string,
}

export const searchCockTailsByLetter = async (letter:string,type:string):Promise<DrinkRecipe[]> =>{

   const url = type ==='letter' ? 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    console.log('loading...')
    return await fetch(url + letter)
    .then(res => res.json())
    .then(data => data.drinks as DrinkRecipe[]);
   
    
}

export const searchCockTails = async (letter:string):Promise<DrinkRecipe[]> =>{

   
        console.log('loading...')
        return await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + letter)
        .then(res => res.json())
        .then(data => data.drinks as DrinkRecipe[]);
    
   
}

export const searchCockTailsByIngredient = async (name:string):Promise<DrinkRecipe[]> =>{

 
       return await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
       .then(res => res.json())
        .then(data => data.drinks as DrinkRecipe[]);
 

}