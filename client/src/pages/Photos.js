import React, { useState, useEffect } from "react";

import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollection from "../Components/Restaurant/PhotoCollection";


const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/dish_photos/96e/27f5066de8bd70692f03cdfe094d396e.jpg",
    "https://b.zmtcdn.com/data/dish_photos/e2a/870c930a003cef08a22d42ae5da67e2a.jpg",
    "https://b.zmtcdn.com/data/dish_photos/7a9/41795cbf34f27ba45a1484b91ba6b7a9.jpg",
    "https://b.zmtcdn.com/data/dish_photos/9b2/f387a40e2e1e4e1e78c3bc068cbe29b2.jpg",
    "https://b.zmtcdn.com/data/dish_photos/96e/27f5066de8bd70692f03cdfe094d396e.jpg",
    "https://b.zmtcdn.com/data/dish_photos/e2a/870c930a003cef08a22d42ae5da67e2a.jpg",
    "https://b.zmtcdn.com/data/dish_photos/7a9/41795cbf34f27ba45a1484b91ba6b7a9.jpg",
    "https://b.zmtcdn.com/data/dish_photos/9b2/f387a40e2e1e4e1e78c3bc068cbe29b2.jpg",
    "https://b.zmtcdn.com/data/dish_photos/96e/27f5066de8bd70692f03cdfe094d396e.jpg",
    "https://b.zmtcdn.com/data/dish_photos/e2a/870c930a003cef08a22d42ae5da67e2a.jpg",
    "https://b.zmtcdn.com/data/dish_photos/7a9/41795cbf34f27ba45a1484b91ba6b7a9.jpg",
    "https://b.zmtcdn.com/data/dish_photos/9b2/f387a40e2e1e4e1e78c3bc068cbe29b2.jpg",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);



  const closeViewer = () => setIsMenuOpen(false);

  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={CurrentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      <div className="flex flex-wrap gap-2">
        {photos.map((photo) => (
          <PhotoCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
    </>
  );
};

export default Photos;
