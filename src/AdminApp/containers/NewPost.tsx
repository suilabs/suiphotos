import React from 'react'
import { ImageListType } from 'react-images-uploading/dist/typings'

import { useApi } from '../../Hooks/useApi'

import NewPost from '../leaves/NewPost'

const NewPostContainer: React.FC = () => {
    const [images, setImages] = React.useState<ImageListType>([])
    const [comment, setComment] = React.useState<string>('')
    const [loading, setLoading] = React.useState<boolean>(false)
    const api = useApi()

    const onFileChange = (imageList: ImageListType, addUpdateIndex?: Array<number>) => {
        // data to submit
        console.log(imageList, addUpdateIndex)
        setImages(imageList)
    }
    
    const onSubmit = async () => {
        if (images.length > 0) {
            await setLoading(true)
            await api.createNewPost({
                files: images.map(({file}) => file),
                comment
            })
            await setLoading(false)
        }
    }
    
    const onCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => setComment(event.target.value)
    
    return <NewPost images={images} loading={loading} onCommentChange={onCommentChange} onFileChange={onFileChange} onSubmit={onSubmit} />
}

export default NewPostContainer
