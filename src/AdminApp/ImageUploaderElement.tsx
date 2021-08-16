import React from 'react'
import STYLE from './ImageUploaderElement.module.scss'

interface ImageUploaderElementProps {
    onUpload: () => void
    onRemove: () => void
}

export default function ImageUploaderElement ({onUpload, onRemove}: ImageUploaderElementProps) {
    return (
        <div className={STYLE.ImageUploaderElement__buttonsWrapper}>
            <button
                className={STYLE.ImageUploaderElement__uploadButton}
                onClick={onUpload}
            >
                Click to upload
            </button>
            <button
                className={STYLE.ImageUploaderElement__removeButton}    
                onClick={onRemove}
            >
                Remove all images
            </button>
        </div>
    )
}
