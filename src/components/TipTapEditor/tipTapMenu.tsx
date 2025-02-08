import React from 'react'
import { Button, ButtonGroup, FormControl, Select, MenuItem } from '@mui/material'
import { Bold, Italic, Underline, Code, List, ListOrdered, Quote, Image, Minus, Redo, Undo } from 'lucide-react'
import './styles.css'


const TipTapMenu: React.FC<{ editor: any}> = ({ editor }) => {
    const addImage = () => {
        const url = window.prompt('Enter the URL of the image')
        if (url && editor) editor?.chain().focus().setImage({ src: url }).run()
    }
    // const typeText = ['paragraph', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6']
    
	return (
		<div className="control-group">
			<ButtonGroup variant="outlined" size="small" aria-label="Basic button group" sx={{ mb: 1}}>
                <Button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                    startIcon={<Bold className="w-5 h-5" />}
                />
                <Button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                    startIcon={<Italic className="w-5 h-5" />}
                />
                <Button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editor.can().chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                    startIcon={<Underline className="w-5 h-5" />}
                />
                <Button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editor.can().chain().focus().toggleCode().run()}
                    className={editor.isActive('code') ? 'is-active' : ''}
                    startIcon={<Code className="w-5 h-5" />}
                />
                <Button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                    startIcon={<List className="w-5 h-5" />}
                />
                <Button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                    startIcon={<ListOrdered className="w-5 h-5" />}
                />
                <Button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    disabled={!editor.can().chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'is-active' : ''}
                    startIcon={<Quote className="w-5 h-5" />}
                />

                {/* <FormControl>
                    <Select
                        labelId="type-text"
                        id="type-text"
                        
                    ></Select>
                </FormControl> */}

                <Button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={!editor.isActive('paragraph') ? 'is-active' : ''}
                >P</Button>
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >H2</Button>
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >H3</Button>
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
                >H4</Button>
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
                >H5</Button>
                <Button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
                >H6</Button>
                <Button
                    onClick={() => addImage()}
                    startIcon={<Image className="w-5 h-5" />}
                />
                <Button
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    disabled={!editor.can().chain().focus().setHorizontalRule().run()}
                    startIcon={<Minus className="w-5 h-5" />}
                />
                <Button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                    startIcon={<Undo className="w-5 h-5" />}
                />
                <Button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                    startIcon={<Redo className="w-5 h-5" />}
                />
            </ButtonGroup>
		</div>
	);
}

export default TipTapMenu