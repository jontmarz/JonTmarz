import React, { useEffect, useState } from 'react'
import { api } from '../../config/axios'
import { useParams } from "react-router-dom"
import { CircularProgress } from '@mui/material'
import SinglePostComponent from '../../components/SinglePost'

const SinglePost: React.FC = () => {
    const { idBlog } = useParams<{ idBlog: string }>()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [featuredImage, setFeaturedImage] = useState<File | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            
            try {
                if (idBlog) {
                    const res = await api.get(`/blog/${idBlog}`);
                    const { title, content, category, featuredImage } = res.data.blog
                    setTitle(title)
                    setContent(content)
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
    }, [idBlog])

    if (loading) return <CircularProgress />

    return (
        <div>
            {/* <h1>Edit Post</h1>
            <p>id: { idBlog }</p> */}
            <SinglePostComponent 
                postId={idBlog || ''}
                initialTitle={title || ''}
                initialContent={content || ''}
                initialCategory={category || ''}
                initialFeaturedImage={featuredImage || ''}
            />
        </div>
    )
}

export default SinglePost