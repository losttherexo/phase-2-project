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
        <button onClick={handleLike}>
            <span> <GiDinosaurRex /> {liked}</span>
        </button>
    )
}

export default LikeButton;