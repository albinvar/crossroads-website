import React from 'react'
import AddVideo from './AddVideo'
import AddImage from './AddImage'

const AddGallery = () => {
    return (
        <div className='space-y-8'>
            <AddImage />
            <AddVideo />
        </div>
    )
}

export default AddGallery