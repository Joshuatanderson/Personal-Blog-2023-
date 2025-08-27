import React, { useState } from 'react'
import { Heart } from 'lucide-react'
import styles from './LikeButton.module.scss'

interface LikeButtonProps {
    postSlug: string
    postTitle: string
}

export const LikeButton: React.FC<LikeButtonProps> = ({ postSlug, postTitle }) => {
    const [liked, setLiked] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleLike = async () => {
        setLiked(true)
        setLoading(true)

        try {
            const response = await fetch('/api/like', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postSlug, blogPost: postTitle }),
            })

            const data = await response.json()
            console.log('Like response:', data)

            if (!response.ok) {
                setLiked(false)
                console.error('Failed to like:', data)
            }
        } catch (error) {
            console.error('Error liking post:', error)
            setLiked(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <button
            className={`${styles.likeButton} ${liked ? styles.liked : ''}`}
            onClick={handleLike}
            disabled={loading || liked}
            aria-label="Like this post"
        >
            <Heart
                size={24}
                fill={liked ? 'currentColor' : 'none'}
                className={styles.icon}
            />
        </button>
    )
}