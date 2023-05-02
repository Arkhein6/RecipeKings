import React from "react";

export const useAutoSlideShow = (statefunc,userArray,time) => {
    React.useEffect(() => {
        const handler = setInterval(() => {
            index = index++ >= userArray.length - 1 ? 0 : index++;
            statefunc(userArray[index]);
        }, time);
        return () => clearInterval(handler);
    }, []);
}