import { useEffect, useState } from 'react'
import { api } from '../../../config/axios'
import { Box, Typography, Paper } from "@mui/material"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import PostImg from '../../../assets/post_img.webp'

const ListBlog: React.FC = () => {
    const [ blogs, setBlogs ] = useState([])
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'image', headerName: 'Image', width: 150, renderCell: (params) => (
            <img 
                src={params.value ? params.value : PostImg} 
                alt={ params.row.title } 
                style={{ width: '48px', height: '48px', objectFit: 'cover', margin: '0 auto' }} 
            />
        ), },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'content', headerName: 'Excerpt', width: 250 },
        { field: 'category', headerName: 'Category', width: 150 },
        { field: 'actions', headerName: 'Actions', width: 100, renderCell: (params) => (
            <Link to={`/edit/${params.row._id}`}>Edit</Link>
        ), }
    ]
    const paginationModel = { page: 0, pageSize: 50 }
    
    const rows = blogs.map((blog: any, index) => {
        return {
            id: index + 1,
            image: blog.image ? blog.image : PostImg,
            title: blog.title,
            content: blog.content,
            category: blog.category,
            _id: blog._id
        }
    })

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
        <Box>
            <Box sx={{ p:1 }}>
                <Typography component="h1" variant="h3" sx={{ mb:3, textAlign: 'center' }}>Blogs</Typography>
            </Box>
            <Paper sx={{ p:1, width: '100%', backgroundColor: 'background.paper' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </Box>
    )
}

export default ListBlog