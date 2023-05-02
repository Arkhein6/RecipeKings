import React from 'react'
import HeroSection from './HeroSection'
import {Link} from 'react-router-dom'
import RecipeCard from './RecipeCard'
import RecipeCircularCard from './RecipeCircularCard'
import { TrendyRecipeImages,CategoryRecipeImages } from '../Images'


const MainContent = () => {
    const [trendyRecipes,setTrendyRecipes] = React.useState(TrendyRecipeImages)
    const [categoryRecipes,setCategoryRecipes] = React.useState(CategoryRecipeImages)
    
    const RecipeElements = trendyRecipes.map((curr) => {
        return <RecipeCard key={curr.Id} Name={curr.Name} Image={curr.Image} />
    })
    const RecipeCircularElements = categoryRecipes.map((curr) => {
        return <RecipeCircularCard key={curr.Id} Category={curr.Category} Image={curr.Image} />
    })
  return (
      <main className=' mx-auto w-[90%] flex flex-col '>
          <HeroSection />
          <section className='flex flex-col gap-5 h-fit'>
                  <div className='w-full flex justify-between '>
                      <h2 className='self-center text-2xl font-semibold '>
                          Trendy{" "}
                          <span className="text-orange-500">Recipes</span>
                      </h2>
                      <Link
                          to={"#"}
                          className="bg-orange-500 py-[8px] px-[10px] rounded-3xl">
                          View More
                      </Link>
                    </div>
                    <div className='grid grid-col-1 xs:grid-cols-4 h-fit w-full gap-5 ' >
                        {
                            RecipeElements
                        }
                        
                    </div>
          </section>

          <section className='flex flex-col gap-5'>
            <h3 className='self-center text-3xl'>Check Our Shop</h3>
            <div className='flex overflow-hidden'>
                <div className='flex'>
                {
                    RecipeCircularElements
                }
                </div>
            </div>
          </section>

          <div className="ml-[10%]">
              <div className="flex flex-col gap-4 w-fit">
                  <h1>Subscribe to our NewsLetter</h1>
                  <p>subscribe to our newsletter and receive a 15% discount</p>
                  <div className="relative w-fit h-[52px]">
                      <input
                          type="text"
                          className=" block border pl-6 border-zinc-950 h-full w-[190px] pr-[110px] rounded-3xl "
                          placeholder="yourmail@gmail.com"
                      />
                      <Link
                          to={"#"}
                          className="bg-orange-500 py-[8px] px-[10px] rounded-3xl
                    absolute right-2 top-[7px] ">
                          Subscribe
                      </Link>
                  </div>
              </div>
          </div>
          <section>
            <h3>Featured Recipes</h3>
            <div className='grid '>

            </div>
          </section>
      </main>
  );
}

export default MainContent