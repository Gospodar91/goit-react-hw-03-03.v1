import React from "react";

const ImageItem = ({ item,onImgClick }) => (
  <li className="ImageGalleryItem">
    <img
      src={item.webformatURL}
      alt="sorry"
      className="ImageGalleryItem-image"
      onClick={()=>onImgClick(item.largeImageURL)}
    />
  </li>
);
export default ImageItem;
