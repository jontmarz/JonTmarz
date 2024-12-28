import react from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const { id } = useParams<{ id: string }>()
    return (
        <div>
            Post { id }
        </div>
    )
}

export default Post