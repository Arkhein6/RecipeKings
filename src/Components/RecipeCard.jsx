import React from "react";
import abs1 from "../Images/background/abs1.jpg";
import abs2 from "../Images/background/abs2.jpg";

const RecipeCard = (props) => {
    return (
        <div className={` border border-orange-500 rounded-3xl flex flex-col gap-3 p-2 max-w-[300px] `}>
            <div
                className="rounded-xl bg-gray-200  h-[200px]">
                <img
                    className=" rounded-xl mx-auto object-contain"
                    src={props.Image}
                />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="font-semibold">{props.Name}</h3>
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
