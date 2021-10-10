import React from 'react'
import ImageUploading from 'react-images-uploading'
import { ImageListType } from 'react-images-uploading/dist/typings'

import { TextInput } from '../../Components/Form/TextInput'
import { Button } from '../../Components/Button'

import { useApi } from '../../Hooks/useApi'

import Loading from '../../Components/Loading'
import ImageUploaderElement from './ImageUploaderElement'
import ImagePreview from './ImagePreview'

import STYLE from './NewPost.module.scss'

interface Props {
    loading: boolean
    images: ImageListType
    onFileChange: (imageList: ImageListType, addUpdateIndex?: Array<number>) => void
    onSubmit: () => void
    onCommentChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const MAX_IMAGES = 10

const NewPost: React.FC<Props> = ({ loading, images, onSubmit, onFileChange, onCommentChange}) => {
    if (loading) {
        return <Loading />
    }
    
    return (
        <div className={STYLE.NewPost__wrapper}>
            <ImageUploading
                multiple
                value={images}
                onChange={onFileChange}
                maxNumber={MAX_IMAGES}
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
                <TextInput  id="comment" placeholder='Add your comment here' onChange={onCommentChange} labelText="Comment"/>
            </div>    
            <div className={STYLE.NewPost__actionsWrapper}>
                <Button onClick={onSubmit}>Post</Button>
            </div>
        </div>
    )
}

export default NewPost
