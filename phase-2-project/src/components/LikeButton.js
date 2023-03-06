import React, {useState} from 'react'
import {GiDinosaurRex} from 'react-icons/gi'

const LikeButton = ({id, likes}) => {
    
    const [liked, setLiked] = useState(parseInt(likes))

    console.log(liked)

    const handleLike = () => {
        setLiked(parseInt(liked) + 1)
    }

    return (
        <button onClick={handleLike}>
            <span> <GiDinosaurRex /> {liked}</span>
        </button>
    )
}

export default LikeButton;