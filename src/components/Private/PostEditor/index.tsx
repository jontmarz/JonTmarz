import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { api } from '../../../config/axios'
import { Box, TextField, Button, Typography } from "@mui/material"

const PostEditor: React.FC = () => {
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const [ category, setCategory ] = useState('')
    const [featuredImage, setFeaturedImage] = useState<File | null>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setFeaturedImage(file);
        }
    }

    const handleImageUpload = async (file: File) => {
        const formData = new FormData();
        formData.append('image', file);
    
        try {
          const response = await api.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          return response.data.url; // Devuelve la URL de la imagen subida
        } catch (error) {
          console.error('Error uploading image:', error);
          return null;
        }
      };
    
      const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
    
        input.onchange = async () => {
          const file = input.files ? input.files[0] : null;
    
          if (file) {
            const imageUrl = await handleImageUpload(file);
            if (imageUrl) {
              const editor = document.querySelector('.ql-editor');
              const range = (editor as any).getSelection();
              (editor as any).clipboard.dangerouslyPasteHTML(
                range.index,
                `<img src="${imageUrl}" alt="Uploaded Image" />`
              );
            }
          }
        };
      };
    
      const modules = {
        toolbar: {
          container: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'], // Botón para agregar imágenes
            ['clean'],
          ],
          handlers: {
            image: imageHandler, // Asignar el handler personalizado
          },
        },
      };
    
      const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'bullet',
        'link',
        'image',
      ]

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('category', category);
            if (featuredImage) {
                formData.append('featuredImage', featuredImage); // Nombre del campo para la imagen en el backend
            }

            const res = await api.post('/blog', formData, {
                headers: { 'Content-Type': 'multipart/form-data', }
            })

            // console.log('Blog created succesfully:', res.data)
            setTitle('')
            setContent('')
            setCategory('')
            setFeaturedImage(null)

        } catch (er: any) {
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
                modules={modules}
                formats={formats}
            />
            <TextField
                fullWidth
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ mt:2 }}
            />
            <Box sx={{ mt:3 }}>
                <Typography variant="body1" sx={{ mb:1 }}>Featured Image</Typography>
                <input type="file" id="upload-image" style={{ display: 'none' }} accept="image/*" onChange={handleImageChange} />
                <label htmlFor="upload-image">
                <Button
                    variant="contained"
                    component="span"
                    color="secondary"
                >
                    {featuredImage ? 'Change Image' : 'Upload Image'}
                </Button>
                </label>
                {featuredImage && (
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Selected: {featuredImage.name}
                    </Typography>
                )}
            </Box>
            <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt:3 }}>Plublish Blog</Button>
        </Box>
    )
}

export default PostEditor