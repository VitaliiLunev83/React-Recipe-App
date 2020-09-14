import React from "react";
import Ingredients from "./Ingredients";


const Recipe = ({title,calories,img,ingredients}) =>{
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <p>Calories {Math.round(calories)} cal </p>
            <img src={img} alt="dishimg"/>
            <Ingredients ingredients={ingredients}/>
        </div>
    )
}

export default Recipe;