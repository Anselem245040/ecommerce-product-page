import React from "react";

export const ProductGallery = ({ activeImage, setActiveImage, image }) => {
  return (
    <div className='product-gallery'>
      <img className='active-img' src={activeImage} alt='Product' />
      <div className='thumbnail-container'>
        {image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt='Thumbnail'
            className={activeImage === img ? "active" : ""}
            onClick={() => setActiveImage(img)}
          />
        ))}
      </div>
    </div>
  );
};
