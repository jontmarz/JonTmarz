import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { api } from '../../config/axios'
import { Box, TextField, Button } from "@mui/material"

const BlogEditor: React.FC = () => {
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const [ category, setCategory ] = useState('')

    const handleSubmit = async () => {
        try {
            const res = await api.post('/blog', {
                title,
                content,
                category
            })
            console.log('Blog created succesfully:', res.data)
            setTitle('')
            setContent('')
            setCategory('')
        } catch (er) {
            console.log('Error creating blog Post', er)
        }
    }

    return (
        <Box sx={{ p:3 }}>
            <TextField
                fullWidth
                label="Blog Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ReactQuill
                value={content}
                onChange={setContent}
                theme="snow"
            />
            <TextField
                fullWidth
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt:3 }}>Plublish Blog</Button>
        </Box>
    )
}

export default BlogEditor