import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Favorites = () => {
  const { photos, setPhotos } = useContext(PhotoContext);

  const removeFavorite = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: false,
        };
      }

      return photo;
    });
    setPhotos(newPhotos);
  };

  return (
<div className="gallery-container">
      <h1>Favoritos</h1>
      {photos.filter((photo) => photo.isFavorite).length === 0 ? (
        <p className="no-favorites-text">No hay fotos en favoritos</p>
      ) : (
        <div className="gallery p-3">
          {photos
            .filter((photo) => photo.isFavorite)
            .map((photo) => (
              <div
                key={photo.id}
                className="photo"
                style={{ backgroundImage: `url(${photo.src.medium})` }}
                onClick={() => removeFavorite(photo.id)}
              >
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default Favorites;