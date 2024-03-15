import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotoContext);

  const addFavorite = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (
    <div className="gallery p-3">
      {photos.map((photo, id) => (
        <div
          onClick={() => addFavorite(photo.id)}
          className="photo"
          style={{ backgroundImage: `url(${photo.src.medium})` }}
          key={id}
        >
          <IconHeart filled={photo.isFavorite} />

          <p className="text-container">{photo.alt}</p>
        </div>
      ))}
    </div>
  );
};
export default Gallery;