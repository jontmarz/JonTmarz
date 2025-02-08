import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { api } from '../../../config/axios'
import { Box, TextField, Button, Typography, Paper, CircularProgress, Grid } from "@mui/material"
import TipTapEditor from '../../TipTapEditor'
import Swal from 'sweetalert2'

interface PostEditorProps {
    postId?: string
    initialTitle?: string
    initialContent?: string
    initialCategory?: string
    initialFeaturedImage?: File | string | null
}

const PostEditor: React.FC<PostEditorProps> = ({
  postId,
  initialTitle = '',
  initialContent = '',
  initialCategory = '',
  initialFeaturedImage = null,
}) => {

    const [title, setTitle] = useState(initialTitle)
    const [content, setContent] = useState(initialContent)
    const [category, setCategory] = useState(initialCategory)
    const [featuredImage, setFeaturedImage] = useState<File | string | null>(
      typeof initialFeaturedImage === 'string' ? initialFeaturedImage : null
    )
    const [loading, setLoading] = useState(false)

    const onDrop = useCallback((acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        setFeaturedImage(file)
      }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: {'image/*' : []},
      multiple: false
    })

    const handleSubmit = async () => {
      setLoading(true)   

      const formData = new FormData()
      formData.append('title', title)
      formData.append('content', content)
      formData.append('category', category)
      if (featuredImage instanceof File) {
        formData.append('featuredImage', featuredImage)
      } else if (typeof initialFeaturedImage === 'string') {
        formData.append('featuredImage', initialFeaturedImage)
      } else {
        console.warn('Featured image is not a file:', featuredImage)
      }

      console.log('Form data:', [...formData.entries()])
     
     try {        
        if (postId) {
            await api.put(`/blog/${postId}`, formData, {
              headers: { 'Content-Type': 'multipart/form-data'}
            })
        } else {
            await api.post('/blog', formData, {
              headers: { 'Content-Type': 'multipart/form-data'}
            })
        }
        setTitle('')
        setContent('<p></p>')
        setCategory('')
        setFeaturedImage(null)
        
        Swal.fire({
          title: 'Post saved successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        })
        window.location.reload()

      } catch (error: any) {
        console.error('Error creating/updating post:', error)
        Swal.fire({
          title: 'Error saving post',
          text: error.response?.data?.message || 'An error occurred while saving the post',
          icon: 'error',
          showConfirmButton: false,
          // timer: 2500,
        })
      } finally {
        setLoading(false)
      }
    }

    const getImagePreview = () => {
      if (featuredImage instanceof File) {
        return URL.createObjectURL(featuredImage)
      } else if (typeof featuredImage === 'string') {
        return featuredImage
      } 

      return null
    }

    return (
      <Box sx={{ p: 3 }}>
        {postId && loading ? (
          <CircularProgress />
        ) : (
          <>
          <Grid container spacing={2} alignItems={'center'} justifyContent={'space-between'}>
            <Grid item xs={12} md={8}>
              {/* Featured Image */}
              <Paper
                {...getRootProps()}
                sx={{
                  p: 2,
                  border: '2px dashed',
                  borderColor: isDragActive ? 'primary.main' : 'text.disabled',
                  backgroundColor: isDragActive ? 'primary.100' : 'transparent',
                  cursor: 'pointer',
                }}
              >
                <input {...getInputProps()} />
                {featuredImage ? (
                  <>
                  {/* Preview the image, if exist */}
                  <img
                    src={`${import.meta.env.VITE_URL_SERVER}${getImagePreview()}`}
                    alt="Featured Image"
                    style={{ width: '100%', maxHeight: '100px', objectFit: 'cover' }}
                  />
                  <Typography variant="caption" color="primary" sx={{  }}>
                    {featuredImage instanceof File ? `Selected: ${featuredImage}` : `Drag 'n' drop an image here, or click to select one`}
                  </Typography>
                  </>
                ) : (
                  isDragActive ? (
                    <Typography variant="body1" sx={{  }}>Drop the image here...</Typography>
                  ) : (
                    <Typography variant="body1" sx={{  }}>Drag 'n' drop an image here, or click to select one</Typography>
                  )
                )}
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {/* Submit button */}
                <Button
                  type='submit'
                  variant="contained"
                  color="primary"
                  sx={{ my: 2}}
                  onClick={handleSubmit}
                  disabled={loading}
                >
                    {loading ? 'Saving...' : 'Publish Blog'}
                </Button>
            </Grid>
          </Grid>

          {/* Title fields */}
          <TextField
            name="title"
            sx={{ my: 2}}
            fullWidth
            label="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Category field */}
          {/* <TextField
            name="category"
            fullWidth
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          /> */}

          {/* Content field */}
          <TipTapEditor
            content={content}
            onContentChange={(newContent: string) => setContent(newContent)}
          />
          </>
        )}
      </Box>
    );
};

export default PostEditor