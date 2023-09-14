import React from "react";

const RecipeCard = (props) => {
    return (
        <div
            className={`flex flex-col shadow-lg shadow-gray-300 max-w-[300px] rounded-b-2xl `}>
            <div className="  h-[200px] ">
                <img
                    className=" rounded-t-2xl  object-cover"
                    src={props.Image}
                />
            </div>
            <div className="flex flex-col gap-1 border border-t-0 rounded-b-2xl border-gray-200 px-3 py-3 ">
                <h3 className="font-semibold text-center ">{props.Name}</h3>
                <p>
                    <span className="font-semibold ">Ingredients: </span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illum.
                </p>
            </div>
        </div>
    );
};

export default RecipeCard;
