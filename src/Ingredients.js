import React from "react";


const Ingredients = ({ingredients}) => {
    return(
        <div className="ingridients_container">
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>

    )
}

export default Ingredients;