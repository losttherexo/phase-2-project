import React, {useState,} from 'react'
import {GiDinosaurRex} from 'react-icons/gi'

const LikeButton = ({id, likes}) => {
    
    const [liked, setLiked] = useState(likes)

    const handleLike = () => {
        
        setLiked(liked + 1)

        fetch(`http://localhost:3001/movies/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                likes: liked + 1
            })
            })    
    }

    return (
        <div className='flex justify-center p-3'>
            <button className='flex justify-center border px-1 rounded shadow-sm bg-stone-500' onClick={handleLike}>
                <span className='font-normal flex flex-row'> 🦖 {liked}</span>
            </button>
        </div>
    )
}

export default LikeButton;