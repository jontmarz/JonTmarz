import React, { useEffect } from "react"
import { useEditor, EditorContent, EditorProvider } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import Color from "@tiptap/extension-color"
import TextStyle from "@tiptap/extension-text-style"
import ListItem from "@tiptap/extension-list-item"
import PlaceHolder from "@tiptap/extension-placeholder"
import TipTapMenu from "./tipTapMenu"
import { Box } from "@mui/material"

interface TipTapEditorProps {
    content: string
    onContentChange: (content: string) => void
}

const TipTapEditor: React.FC<TipTapEditorProps> = ({ content = '', onContentChange }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image.configure({
                inline: true,
                allowBase64: true
            }),
            PlaceHolder.configure({
                placeholder: 'Start typing here...',
                emptyEditorClass: 'empty-editor'
            }),
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
            TextStyle
        ],
        content: content,
        onUpdate({ editor }) {
            const html = editor.getHTML()
            if (onContentChange) onContentChange(html)
            },
    })

    if (!editor) return null
    
    return (
        <Box sx={{ border: '1px solid rgba(255, 255, 255, 0.23)', borderRadius: '4px', padding: '16px' }} id="tiptap-editor">
            <TipTapMenu editor={editor} />
            <EditorContent editor={editor} />
        </Box>
    )
}

export default TipTapEditor