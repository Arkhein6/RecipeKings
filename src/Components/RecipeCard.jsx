import React from 'react'

const RecipeCard = (props) => {
  return (
      <div className="flex flex-col gap-3">
          <div className="  bg-red-500/40 h-[200px] ">
              <img className="w-[200px] mx-auto " src={props.Image} />
          </div>
          <div className="flex flex-col gap-1">
              <h3>{props.Name}</h3>
              <p>
                  <span>Ingredients: </span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum.
              </p>
          </div>
      </div>
  );
}

export default RecipeCard