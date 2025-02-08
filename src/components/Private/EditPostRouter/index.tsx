import React, { useState, useEffect } from "react"
import PostEditor from "../PostEditor"

const EditPost: React.FC<{ postId: string }> = ({ postId }) => {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsReady(true)
        }, 100)

        return () => clearTimeout(timeOut)
        
    }, [postId])
    
    return (
        isReady && (
            <div>
                <PostEditor postId={postId} />
            </div>
        )
    )
}

export default EditPost