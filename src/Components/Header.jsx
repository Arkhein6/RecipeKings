import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	
	return (
        <header className="py-3 sticky top-0 backdrop-blur-lg bg-white/80 z-10 border-b-2 border-gray-200 ">
            <div className="w-[90%] flex justify-between content-center mx-auto">
                <div className="self-start text-3xl">
                    <h1>Rec<span className="text-orange-500">i</span>pe<span className="text-orange-500">Kings</span></h1>
                </div>
                <div className=" hidden text-xl lg:flex justify-between gap-12 content-center">
                    <NavLink className="hover:text-orange-500" to={"#"}>
                        Recipes
                    </NavLink>
                    <NavLink className="hover:text-orange-500" to={"#"}>
                        Sensations
                    </NavLink>
                    <NavLink className="hover:text-orange-500 " onClick={() => {
                        const account_modal = document.getElementById("account_modal")
                        account_modal.showModal()
                    }}>
                        Sign in
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
