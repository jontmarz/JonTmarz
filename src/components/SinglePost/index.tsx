import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Container, Typography, Box } from '@mui/material'

interface singlePostProps {
    postId: string;
    initialTitle: string;
    initialContent: string;
    initialCategory: string;
    initialFeaturedImage: string | File;
}

const SinglePost: React.FC<singlePostProps> = ({
    postId,
    initialTitle,
    initialContent,
    initialCategory,
    initialFeaturedImage
}) => {
    const [title, setTitle] = useState(initialTitle)
    const [content, setContent] = useState(initialContent)
    const [category, setCategory] = useState(initialCategory)
    const [featuredImage, setFeaturedImage] = useState<File | string | null>(initialFeaturedImage)

    return (
    <Container sx={{ paddingTop: 15 }}>
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">

            <Grid item size={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={typeof featuredImage === 'string' ? `${import.meta.env.VITE_URL_SERVER}${featuredImage}` : (featuredImage ? URL.createObjectURL(featuredImage) : '')} alt="Featured" />
            </Grid>

            <Grid item size={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h2" component="h1" sx={{ textAlign: 'center' }}>{title}</Typography>
            </Grid>

            <Grid item size={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box dangerouslySetInnerHTML={{ __html: content }} />
            </Grid>
        </Grid>
        {/* <p>post {postId}</p>
        <div>{content}</div>
        <p>{category}</p>
        <img src={typeof featuredImage === 'string' ? `${import.meta.env.VITE_URL_SERVER}${featuredImage}` : (featuredImage ? URL.createObjectURL(featuredImage) : '')} alt="Featured" /> */}
    </Container>
    )
}

export default SinglePost