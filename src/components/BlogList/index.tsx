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

    return (
        <>
        <Box sx={{ p:3, mt: '4em' }}>
            <Typography component="h1" variant="h3" sx={{ mb:3, textAlign: 'center' }}>Blogs</Typography>
        </Box>
        <Grid container spacing={3} sx={{ px: '2em', }}>
            {blogs.reverse().map((blog: any) => (
                <Grid item xs={12} sm={6} md={3} key={blog._id}>
                    <Card sx={{ width: '100%', }}>
                        <Link to={`/post/${blog._id}`} style={{ textDecoration: 'none' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={blog.image ? blog.image : PostImg }
                                    alt={blog.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {blog.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {blog.content}
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