import React from 'react'

const RecipeCircularCard = (props) => {
  return (
    <div>
        <div className='w-[120px] mx-auto h-[120px] xs:w-[140px] xs:h-[140px] border border-orange-500 rounded-[50%] p-[5px] flex flex-col gap-2'>
            <img className='object-cover  rounded-[50%]'src={props.Image} />
        </div>
        <p className='text-center font-semibold text-xl'>{props.Category}</p>
    </div>
  )
} 

export default RecipeCircularCard