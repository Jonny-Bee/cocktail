
import './App.css';
import React  from 'react';
import { Routes, Route } from 'react-router';
import Home from './routes/home/home.route';
import NavigationBar from './routes/navigation/navigation.route';
import Recipe from './routes/recipe/recipe.route';
import DrinkList from './routes/list/list.route';

const App = () =>{
 

  return(
    <Routes>
      <Route path='/' element = {<NavigationBar />}>
          <Route index element={<Home/>}/>
          <Route path='list/*' element={<DrinkList/>}/>
          <Route path='recipe/*' element={<Recipe/>}/> 
      </Route>
    </Routes>
  )
}

export default App;
