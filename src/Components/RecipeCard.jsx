import React from "react";
import abs1 from "../Images/background/abs1.jpg";
import abs2 from "../Images/background/abs2.jpg";

const RecipeCard = (props) => {
    return (
        <div className={`  flex flex-col  max-w-[300px] `}>
            <div
                className=" border-x border-t border-orange-500 rounded-t-3xl p-2 h-[200px] ">
                <img
                    className=" rounded-xl mx-auto object-contain"
                    src={props.Image}
                />
            </div>
            <div className="flex flex-col bg-black text-white gap-1 border border-black px-3 py-4 rounded-b-3xl">
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
