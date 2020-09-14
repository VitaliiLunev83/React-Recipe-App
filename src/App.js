import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";

function App() {

    const APP_ID = "c519fcbc";
    const API_KEY = "399ca1a0d2b721bff2b32826f9b66850";

    const [recipes, setRecipes] = useState([]);
    const [serch, setSerch] = useState('');
    const [query, setQuery] = useState('chicken')

    const getRecipes = async ()=> {
       const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
       const data = await response.json();
       setRecipes(data.hits);
       // console.log(data.hits);
    }


    useEffect(()=>{
            getRecipes();
        },[query]
    );

    let changeSerch = (e) => {
        setSerch(e.target.value);

    }

    const getQuery = (e) =>{
        e.preventDefault();
        setQuery(serch);
        setSerch('');
    }


    return (
        <div className="App">
                <form onSubmit={getQuery} className="serch_form">
                    <input className="serch_bar" type="text" value={serch} onChange={changeSerch}/>
                    <button className="serch_btn">Serch recipe</button>
                </form>
              <div className="recipies_container">
                  {recipes.map(recipe=>(
                      <Recipe key={recipe.recipe.label}
                              title={recipe.recipe.label}
                              calories={recipe.recipe.calories}
                              img={recipe.recipe.image}
                              ingredients={recipe.recipe.ingredients}
                      />
                  ))}

              </div>
        </div>
    );
}

export default App;
