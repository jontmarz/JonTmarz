import { useEffect, useState } from 'react'
import { api } from '../../config/axios'
import { Box, Typography, CardMedia, Grid, Card, CardContent, Button, CardActionArea, CardActions } from "@mui/material"
import { Link } from "react-router-dom"
import PostImg from '../../assets/post_img.webp'

const BlogList: React.FC = () => {
    const [ blogs, setBlogs ] = useState([])

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await api.get('/blog')
                setBlogs(res.data.blogs)
                
            } catch (er) {
                console.log('Error fetching blogs', er)
            }
        }
        fetchBlogs()
    }, [])

    const removeHtmlTags = (str: string, maxLength: number = 100) => {
        const PostContent: string = str.replace(/<[^>]*>/g, '')
        return PostContent.length > maxLength ? `${PostContent.slice(0, maxLength)}...` : PostContent
    }

    const maxTitle = (str: string, maxLength: number = 20) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str

    return (
        <>
        <Box sx={{ p:3, mt: '4em' }}>
            <Typography component="h1" variant="h3" sx={{ mb:3, textAlign: 'center' }}>Blogs</Typography>
        </Box>
        <Grid container spacing={3} sx={{ px: '2em', }}>
            {blogs.reverse().map((blog: any) => (
                <Grid item xs={12} sm={6} md={3} key={blog._id} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
                    <Card sx={{ width: '100%', }}>
                        <Link to={`/post/${blog._id}`} style={{ textDecoration: 'none' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={blog.featuredImage ? `${import.meta.env.VITE_URL_SERVER}${blog.featuredImage}` : PostImg }
                                    alt={blog.title}
                                    sx={{ objectFit: 'cover', maxHeight: '140px', width: '100%' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {maxTitle(blog.title)}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {removeHtmlTags(blog.content)}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        <CardActions>
                            <Link to={`/post/${blog._id}`}>
                                <Button size="small" color="primary">
                                    Read More
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </>
    )
}

export default BlogList