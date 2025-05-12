import React from 'react'
import AddGallery from './AddGallery'
import CreateGallery from './CreateGallery'

const GalleryCreate = () => {
  return (
    <div className='space-y-8'>
        <CreateGallery/>
        <AddGallery/>
    </div>
  )
}

export default GalleryCreate