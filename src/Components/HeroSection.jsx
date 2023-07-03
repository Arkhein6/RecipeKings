import React from "react";
import { heroImage } from "../Images";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
    return (
        <section className="h-screen xs:flex justify-center">
            <div className="w-full flex justify-between">
                <div className=" self-center w-[45%] flex flex-col gap-5">
                    <h2 className="text-xl xs:text-5xl font-semibold ">
                        <Typewriter
                            options={{
                                autoStart: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(
                                        `Welcome to </br> Rec<span class='loop'>i</span>pe<span class='loop'>Kings</span>`
                                    )
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString(
                                        `<span class="loop">Delicious Dishes</span>`
                                    )
                                    .pauseFor(1000)
                                    .typeString("<br>for Food Lovers.")
                                    .start();
                            }}
                        />
                    </h2>
                    <motion.p
                        initial={{
                            x: "-100%",
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 14,
                            duration: 1.5,
                        }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet veniam molestiae cupiditate voluptatem, dolore
                        exercitationem fugiat nobis, nostrum illum vero
                        explicabo harum reiciendis.
                    </motion.p>
                    <motion.div
                        initial={{
                            y: "500%",
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 15,
                            duration: 1,
                        }}>
                        <Link
                            className="bg-orange-500 border-2 w-fit py-3 px-4 rounded-3xl hover:border-2 hover:border-orange-500 hover:bg-white"
                            to={"/recipes"}>
                            Explore Recipes
                        </Link>
                    </motion.div>
                </div>
                <div className="self-center w-[55%] h-full hidden xs:block ">
                    <img src={heroImage} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
