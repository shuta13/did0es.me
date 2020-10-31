import "./Modal.scss";
import React from "react";
import { Work } from "../organisms/Carousel";
import ImagePostProcess from "../common/ImagePostProcess";
import DetailsInfo from "../partials/Details/DetailsInfo";

export const Modal: React.FC<{
  work: Work;
  style: React.CSSProperties;
  setIsShowModal: (isShowModal: boolean) => void;
}> = props => {
  const { work, style, setIsShowModal } = props;
  return (
    <div className="ModalWrap" style={style}>
      <ImagePostProcess img={`/works/${work.img}`} />
      <DetailsInfo info={work.info} />
      <button className="ModalClose" onClick={() => setIsShowModal(false)}>
        Close
      </button>
    </div>
  );
};