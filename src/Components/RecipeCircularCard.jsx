import React from 'react'

const RecipeCircularCard = (props) => {
  return (
    <div>
        <div className='w-[140px] h-[140px] rounded-[50%] flex flex-col gap-2'>
            <img src={props.Image} />
        </div>
        <p>{props.Category}</p>
    </div>
  )
}

export default RecipeCircularCard