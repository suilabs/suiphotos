import React from 'react'
import { ImageType } from 'react-images-uploading'
import { ImageListType } from 'react-images-uploading/dist/typings'
import { Button } from '../../Components/Button'

import STYLE from './ImagePreview.module.scss'

interface ImagePreviewProps {
    imageList: ImageListType
    onImageUpdate: (index: number) => void
    onImageRemove: (index: number) => void
}

export default function ImagePreview ({imageList, onImageUpdate, onImageRemove}: ImagePreviewProps) {
    return (
        <>
            <div className={STYLE.ImagePreview__wrapper}>
                {imageList.map((image: ImageType, index: number) => (
                    <div key={image.file?.name} className={STYLE.ImagePreview__item}>
                        <img className={STYLE.ImagePreview__image} src={image.data_url} alt={`preview_${index}`}/>
                        <div className={STYLE.ImagePreview__btnWrapper}>
                            <Button kind="tertiary" onClick={() => onImageUpdate(index)}>Update</Button>
                            <Button kind="danger--tertiary" onClick={() => onImageRemove(index)}>Remove</Button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
