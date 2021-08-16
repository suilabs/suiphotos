import React from 'react'
import ImageUploading from 'react-images-uploading'
import { ImageListType } from 'react-images-uploading/dist/typings'

import { useApi } from '../Hooks/useApi'

import Loading from '../Components/Loading'
import ImageUploaderElement from './ImageUploaderElement'
import ImagePreview from './ImagePreview'

import STYLE from './NewPost.module.scss'

export function NewPost() {
    const [images, setImages] = React.useState<ImageListType>([])
    const [comment, setComment] = React.useState<string>('')
    const [loading, setLoading] = React.useState<boolean>(false)
    const api = useApi()
    const maxNumber = 69

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

    if (loading) {
        return <Loading />
    }
    
    return (
        <div className={STYLE.NewPost__wrapper}>
            <ImageUploading
                multiple
                value={images}
                onChange={onFileChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                  }) => (
                    <div className={STYLE.NewPost__imagesWrapper}>
                        <ImageUploaderElement onUpload={onImageUpload} onRemove={onImageRemoveAll}/>
                        <ImagePreview imageList={imageList} onImageUpdate={onImageUpdate}
                                            onImageRemove={onImageRemove}/>
                    </div>
                )}
            </ImageUploading>

            <div className={STYLE.NewPost__comment}>
                <input className={STYLE.NewPost__commentInput} value={comment} placeholder='Add your comment here' onChange={({target: { value }}) => setComment(value)}/>
            </div>    
            <div className={STYLE.NewPost__actionsWrapper}>
                <button className={STYLE.NewPost__postButton} onClick={onSubmit}>
                    Post
                </button>
            </div>
        </div>
    )
}
