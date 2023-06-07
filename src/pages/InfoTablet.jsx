import { useState } from "react";
import data from "../components/api/Data";
import {
  RiCheckboxCircleFill,
  RiCloseCircleLine,
  RiDeleteBin2Fill,
  RiEdit2Fill,
} from "react-icons/ri";

const InfoTable = () => {
  const [videos, setVideos] = useState(data.videos);
  const [editingVideo, setEditingVideo] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedUrl, setEditedUrl] = useState("");
  const [editedImage, setEditedImage] = useState("");

  const handleEdit = (video) => {
    setEditingVideo(video);
    setEditedName(video.name);
    setEditedUrl(video.url);
    setEditedImage(video.image);
  };

  const handleSave = () => {
    if (editingVideo) {
      // Actualizar el video en el arreglo de videos
      const updatedVideos = videos.map((video) => {
        if (video.name === editingVideo.name) {
          return {
            ...video,
            name: editedName,
            url: editedUrl,
            image: editedImage,
          };
        }
        return video;
      });

      setVideos(updatedVideos);

      // Actualizar el video en el objeto data
      const updatedData = { ...data };
      updatedData.videos = updatedVideos;
      console.log("Video editado:", editingVideo);

      // Actualizar el objeto data (opcional)
      // Esto solo actualizará el objeto data en memoria, no afectará el archivo original
      // Si deseas guardar los cambios permanentemente, necesitarás una solución de backend
      data.videos = updatedVideos;

      // Restablecer los valores de edición
      setEditingVideo(null);
      setEditedName("");
      setEditedUrl("");
      setEditedImage("");
    }
  };

  const handleCancel = () => {
    setEditingVideo(null);
    setEditedName("");
    setEditedUrl("");
    setEditedImage("");
  };

  const handleDelete = (video) => {
    const updatedVideos = videos.filter((v) => v.name !== video.name);
    setVideos(updatedVideos);

    const updatedData = { ...data };
    updatedData.videos = updatedVideos;
    console.log("Eliminar video:", video);

    data.videos = updatedVideos;
  };

  return (
    <section className="grid h-screen gap-3 p-5 place-content-center lg:ml-56 2xl:-ml-30">
      <div className="overflow-x-auto border h-[35rem] lg:ml-5 lg:h-[40rem] ">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="border">Categoría</th>
              <th className="border">Nombre</th>
              <th className="border">URL</th>
              <th className="border">Imagen</th>
              <th className="border">Acciones</th>
            </tr>
          </thead>
          <tbody className="border">
            {videos.map((video) => (
              <tr key={video.name}>
                <td className="max-w-xs overflow-hidden border">
                  {video.categoria}
                </td>
                <td className="max-w-xs overflow-hidden border">
                  {editingVideo === video ? (
                    <input
                      className="p-1 m-1 bg-transparent border w-72"
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    video.name
                  )}
                </td>
                <td className="max-w-xs overflow-hidden border">
                  {editingVideo === video ? (
                    <input
                      className="p-1 m-1 bg-transparent border w-72"
                      type="text"
                      value={editedUrl}
                      onChange={(e) => setEditedUrl(e.target.value)}
                    />
                  ) : (
                    video.url
                  )}
                </td>
                <td className="max-w-xs overflow-hidden border">
                  {editingVideo === video ? (
                    <input
                      className="p-1 m-1 my-3 bg-transparent border w-72"
                      type="text"
                      value={editedImage}
                      onChange={(e) => setEditedImage(e.target.value)}
                    />
                  ) : (
                    video.image
                  )}
                </td>
                <td className="max-w-xs border ">
                  <div className="flex items-center justify-between gap-3 p-2">
                    {editingVideo === video ? (
                      <>
                        <button onClick={handleSave}>
                          <RiCheckboxCircleFill className="text-2xl transition-all hover:text-green-500" />
                        </button>
                        <button onClick={handleCancel}>
                          <RiCloseCircleLine className="text-2xl transition-all hover:text-red-500" />
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(video)}>
                          <RiEdit2Fill className="text-2xl transition-all hover:text-green-500" />
                        </button>
                        <button onClick={() => handleDelete(video)}>
                          <RiDeleteBin2Fill className="text-2xl transition-all hover:text-red-500" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default InfoTable;
