import React from 'react'
import { heroImages } from '../Images'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const HeroSection = () => {
  const [heroImage, setHeroImage] = React.useState(heroImages[3]);

  return (
      <section className={` h-screen xs:flex justify-center bg-no-repeat bg-contain 
      bg-[url('/src/Images/no15.png')] xs:bg-none`}>
          <div className="w-full flex justify-between" >
              <div className=" self-center w-[40%] flex flex-col gap-5">
                  <h2 className="text-xl xs:text-5xl font-semibold ">
                      <span className="text-orange-500 ">
                          
                          Delicious Dishes
                      </span>
                      <br></br>for Food Lovers
                  </h2>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet veniam molestiae cupiditate voluptatem, dolore
                      exercitationem fugiat nobis, nostrum illum vero explicabo
                      harum reiciendis.
                  </p>
                  <Link
                      className="bg-orange-500 w-fit py-3 px-4 rounded-3xl"
                      to={"/recipes"}>
                      Explore Recipes
                  </Link>
              </div>
              <div className='self-center w-[60%] hidden xs:block'>
                <motion.img src={heroImage} />
              </div>
          </div>
      </section>
  );
}

export default HeroSection