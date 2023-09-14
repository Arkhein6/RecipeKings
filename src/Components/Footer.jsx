import React from "react";
import { Link } from "react-router-dom";
import pepper from "../Images/Pepper.png";
import { facebook, linkedin, instagram, twitter } from "../icons";

const Footer = () => {
    return (
        <footer className=" bg-gray-100 xs:mt-6 relative">
            <div className=" absolute h-28 w-24 right-10 top-[-60px] -rotate-[35deg] ">
                <img
                    className="bg-transparent block w-full h-full "
                    src={pepper}
                />
            </div>
            <div className="py-3 flex w-[90%] flex-col justify-center content-center mr-auto ml-auto gap-5">
                <div className="self-center">
                    <h1>Recipe Kings</h1>
                </div>
                <div className="text-center">
                    <p>
                        Lorem ipsum dolor sit amet dispicing,<br></br>{" "}
                        consectetur adipisicing elit.
                    </p>
                </div>
                <div className="flex flex-col gap-5 self-center ">
                    <div className="self-center flex gap-5">
                        <Link
                            to="#"
                            className="grid place-content-center bg-orange-500 h-[32px] w-[32px] rounded-[50%]">
                            <img className=" bg-transparent " src={facebook} />
                        </Link>
                        <Link
                            to="#"
                            className="grid place-content-center bg-orange-500 h-[32px] w-[32px] rounded-[50%] ">
                            <img className=" bg-transparent " src={linkedin} />
                        </Link>
                        <Link
                            to="#"
                            className="grid place-content-center bg-orange-500 h-[32px] w-[32px] rounded-[50%]">
                            <img className=" bg-transparent " src={twitter} />
                        </Link>
                        <Link
                            to="#"
                            className="grid place-content-center bg-orange-500 h-[32px] w-[32px] rounded-[50%]">
                            <img className=" bg-transparent " src={instagram} />
                        </Link>
                    </div>
                    <p>
                        <a
                            href="https://iconscout.com/icons/facebook"
                            target="_blank"
                            className=" text-orange-500 hover:underline">
                            Free Icons
                        </a>{" "}
                        by{" "}
                        <a
                            href="https://iconscout.com/contributors/unicons"
                            target="_blank"
                            className="text-orange-500 hover:underline">
                            Unicons Font
                        </a>
                    </p>
                </div>
                <div
                    className=" w-full relative justify-center flex gap-5 before:h-[1px] before:absolute before:bg-gray-500 before:w-[100vw]
                before:top-[-5px] after:h-[1px] after:absolute after:bg-gray-500 after:w-[100vw] after:bottom-[-5px]">
                    <Link to={"#"}>Recipes</Link>
                    <Link to={"#"}>Sensations</Link>
                    <Link to={"#"}>Sign in</Link>
                </div>
                <div className="self-center flex justify-between w-full text-[15px] xs:text-md">
                    <h3 className="">@Copyright 2023</h3>
                    <div className="flex gap-[5px]">
                        <Link to={"#"}>Terms and Condition</Link>
                        <Link to={"#"} className="hidden xs:block">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
