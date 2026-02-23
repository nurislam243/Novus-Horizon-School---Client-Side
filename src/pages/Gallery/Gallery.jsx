import React from 'react'
import PhotoGallery from './PhotoGallery/PhotoGallery'
import PageBanner from '../../components/Shared/PageBanner/PageBanner'

const Gallery = () => {
  return (
    <div>
      <PageBanner></PageBanner>
      <PhotoGallery></PhotoGallery>
    </div>
  )
}

export default Gallery