import React from "react";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import BlogCard from "./BlogCard";
import bg1 from "../Images/background/new1.png";
import bg2 from "../Images/background/new2.png";
import RecipeCircularCard from "./RecipeCircularCard";
import {
    TrendyRecipeImages,
    CategoryRecipeImages,
    blogSectionImages,
} from "../Images";
import { motion } from "framer-motion";
import pepper from "../Images/Leonardo_Diffusion_a_single_red_ultra_realistic_chilli_pepper_0-removebg-preview.png";
import pexels17 from "../Images/background/pexels18.jpg";

const MainContent = () => {
    const [trendyRecipes, setTrendyRecipes] =
        React.useState(TrendyRecipeImages);
    const [categoryRecipes, setCategoryRecipes] =
        React.useState(CategoryRecipeImages);
    const [BlogSectionCards, setBLogSectionCards] =
        React.useState(blogSectionImages);

    const RecipeElements = trendyRecipes.map((curr) => {
        return <RecipeCard key={curr.Id} Name={curr.Name} Image={curr.Image} />;
    });
    const RecipeCircularElements = categoryRecipes.map((curr) => {
        return (
            <RecipeCircularCard
                key={curr.Id}
                Category={curr.Category}
                Image={curr.Image}
            />
        );
    });
    const BlogSectionElements = blogSectionImages.map((curr, idx) => {
        return (
            <BlogCard
                key={idx}
                image={curr.image}
                description="Lorem ipsum dolor sit amet consecterur adipiscing elit somredthe"
                date={curr.date}
                title="Our Recipes Blog"
            />
        );
    });
    const FeaturedRecipeElements = categoryRecipes.map((curr) => {
        return (
            <RecipeCard
                key={curr.Id}
                featured
                Name={curr.Category}
                Image={curr.Image}
            />
        );
    });

    return (
        <main className=" mx-auto  w-[90%] flex flex-col lg:gap-[7rem] gap-[5rem] ">
            <HeroSection />
            <section className="TrendyRecipes flex flex-col gap-7 h-fit">
                <div className="w-full flex justify-between ">
                    <motion.h2
                        initial={{
                            opacity: 0,
                            x: "-100%",
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        className="self-center text-2xl font-semibold ">
                        Trendy <span className="text-orange-500">Recipes</span>
                    </motion.h2>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: "100%",
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 1.5,
                        }}>
                        <Link
                            to={"#"}
                            className="border-2 bg-orange-500 py-[9px] px-[12px] rounded-3xl hover:border-2 hover:border-orange-500 hover:bg-white">
                            View More
                        </Link>
                    </motion.div>
                </div>
                <div className="grid grid-col-1 xs:grid-cols-2 lg:grid-cols-4 h-fit w-full gap-5">
                    {RecipeElements}
                </div>
            </section>

            <section className="CheckOurShop flex flex-col gap-5 relative">
                <div className=" absolute h-36 w-28 top-[-130px] -rotate-[45deg] ">
                    <img
                        className="bg-transparent block w-full h-full "
                        src={pepper}
                    />
                </div>
                <h3 className="self-center text-3xl">Check Our Shop</h3>
                <div className="flex ">
                    <div className="w-full grid grid-cols-1  gap-5 xs:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between">
                        {RecipeCircularElements}
                    </div>
                </div>
            </section>
            <section className="Recipe-Blog">
                <div className="flex flex-col gap-5">
                    <div className="w-full flex justify-between ">
                        <motion.h2
                            initial={{
                                opacity: 0,
                                x: "-100%",
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 1.5,
                            }}
                            className="self-center text-2xl font-semibold ">
                            Recipe Blog
                        </motion.h2>
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: "100%",
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 1.5,
                            }}>
                            <Link
                                to={"#"}
                                className="border-2 bg-orange-500 py-[9px] px-[12px] rounded-3xl hover:border-2 hover:border-orange-500 hover:bg-white">
                                View More
                            </Link>
                        </motion.div>
                    </div>
                    <div className="p-1 flex flex-col lg:flex-row gap-5 lg:gap-[4%]">
                        <div className=" lg:w-[48%] flex flex-col gap-2">
                            <div className="h-[330px] ">
                                <img
                                    className="rounded-2xl obeject-cover"
                                    src={pexels17}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p>November 16, 2016</p>
                                <h3 className="font-semibold text-xl">
                                    Our Recipes Blog
                                </h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Alias vel officia officiis
                                    odio tempore magni quas, nisi hic facere
                                    quaerat ad nostrum labore.
                                </p>
                            </div>
                        </div>
                        <div className="p-1 lg:w-[48%] flex flex-col justify-between gap-5 ">
                            {BlogSectionElements}
                        </div>
                    </div>
                </div>
            </section>
            <section className="ml-[calc(-5%+-8.23px)] NewsLetter h-[300px] w-screen bg-black ">
                <div className="ml-[10%] mt-[5%] w-fit">
                    <div className="flex flex-col gap-4 text-white w-fit">
                        <h1>Subscribe to our NewsLetter</h1>
                        <p>
                            subscribe to our newsletter and receive a 15%
                            discount
                        </p>
                        <div className="relative text-black w-fit h-[52px]">
                            <input
                                type="text"
                                className=" block border pl-5 border-zinc-950 h-full w-[100px] sm:w-[190px] rounded-3xl pr-[100px] sm:pr-[105px] "
                                placeholder="yourmail@gmail.com"
                            />
                            <Link
                                to={"#"}
                                className="text-[15px] bg-orange-500 py-[8px] px-[8px] sm:px-[10px] rounded-3xl
                    absolute right-2 top-[8px] ">
                                Subscribe
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h3>Featured Recipes</h3>
                <div className="grid gap-6 grid-cols-1 place-content-between xs:grid-cols-2 lg:grid-cols-3 ">
                    {FeaturedRecipeElements}
                </div>
            </section>
        </main>
    );
};

export default MainContent;
