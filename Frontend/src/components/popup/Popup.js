"use client";

import { context } from "@/context/context";
import { Fragment, useContext } from "react";
import EmbedPopup from "./EmbedPopup";
import ImageGallery from "./ImageGallery";
import ImageView from "./ImageView";
import ProjectPopup from "./ProjectPopup";

const Popup = () => {
  const { modal, portfolioModal, blogModal } = useContext(context);
  return (
    <>
      <EmbedPopup />
      <ImageView />
      <ImageGallery />
      {modal && portfolioModal && <ProjectPopup />}
    </>
  );
};
export default Popup;
