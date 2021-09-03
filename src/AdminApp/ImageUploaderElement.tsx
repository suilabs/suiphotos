import React from 'react'
import STYLE from './ImageUploaderElement.module.scss'

import { Button } from '../Components/Button'
import { FormLabel } from '../Components/Form/Label'

interface ImageUploaderElementProps {
    onUpload: () => void
    onRemove: () => void
}

export default function ImageUploaderElement ({onUpload, onRemove}: ImageUploaderElementProps) {
    return (
        <>
            <FormLabel>Upload Images</FormLabel>
            <div className={STYLE.ImageUploaderElement__buttonsWrapper}>
                <Button
                    kind="secondary"
                    className={STYLE.ImageUploaderElement__uploadButton}
                    onClick={onUpload}
                >
                    Click to upload
                </Button>
                <Button
                    kind="danger"
                    className={STYLE.ImageUploaderElement__removeButton}    
                    onClick={onRemove}
                >
                    Remove all images
                </Button>
            </div>
        </>
    )
}
