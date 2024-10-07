import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const CloudinaryComponent = ({ imagen, className }) => {
    const cld = new Cloudinary({ cloud: { cloudName: 'drnin6pjw' } });


    // Use this sample image or upload your own via the Media Explorer
    const img = cld
        .image("pakanga/" + imagen)
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('90')
        .resize(auto().gravity(autoGravity()).width(200).height(200)); // Transform the image: auto-crop to square aspect_ratio

    return (<AdvancedImage cldImg={img} className={className} alt="imagen producto" />);
};

export default CloudinaryComponent