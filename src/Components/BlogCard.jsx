import React from "react";

const BlogCard = (props) => {
    return (
        <div className="flex gap-1">
            <div className=" w-[200px] xs:w-[130px] h-[120px]">
                <img
                    className="rounded-lg brightness-[0.8] object-cover"
                    src={props.image}
                />
            </div>
            <div className="flex flex-col gap-1">
                <p> {props.date}</p>
                <h3 className="font-semibold">{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default BlogCard;
