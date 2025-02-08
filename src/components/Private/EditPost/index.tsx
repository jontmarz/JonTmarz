import React, { useState, useEffect } from "react"
import PostEditor from "../PostEditor"
import { api } from '../../../config/axios'
import { Typography, CircularProgress } from "@mui/material"

const EditPost: React.FC<{ postId: string }> = ({ postId }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [featuredImage, setFeaturedImage] = useState<File | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            
            try {
                if (postId) {
                    const res = await api.get(`/blog/${postId}`);
                    const { title, content, category, featuredImage } = res.data.blog
                    setTitle(title)
                    setContent(content || '<p></p>')
                    setCategory(category)
                    setFeaturedImage(featuredImage)
                } else {
                    setContent('')
                }

            } catch (error) {
                console.error('Error loading post:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPost()
        
    }, [postId])

    if (loading) return <CircularProgress />
    
    return (
        <div>
            <PostEditor
                postId={postId}
                initialTitle={title}
                initialContent={content}
                initialCategory={category}
                initialFeaturedImage={featuredImage}
            />
        </div>
    )
}

export default EditPost