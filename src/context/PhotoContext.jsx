import { createContext, useEffect, useState } from "react";

export const PhotoContext = createContext();

const PHOTO_URL = "/photos.json";

const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const response = await fetch(PHOTO_URL);

    const { photos: photosDB } = await response.json();
    setPhotos(photosDB.map((photo) => ({ ...photo, isFavorite: false })));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <PhotoContext.Provider
      value={{
        photos,
        setPhotos,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};
export default PhotoProvider;
