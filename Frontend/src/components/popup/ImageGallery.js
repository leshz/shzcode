import { context } from "@/context/context";
import FsLightbox from "fslightbox-react";
import { Fragment, useContext } from "react";

const ImageGallery = () => {
  const { gallery, setGallery } = useContext(context);

  return (
    <FsLightbox
        toggler={gallery}
        sources={[
          "images/works/work1.jpg",
          "images/works/work2.jpg",
          "images/works/work3.jpg",
          "images/works/work4.jpg",
        ]}
      />
  );
};
export default ImageGallery;
