
//Here displays webcam interface, where we have option of click the photo and clicks one.
//We are using react-webcam module for this.
//After clicking the picture, a modal ie dialog box appears displays ImageCrop component
//We send the clicked image to ImageCrop Component, visit ImageCrop.js
import React, { lazy, useState } from 'react'
import Webcam from "react-webcam";
import { Modal, ModalBody} from 'reactstrap';
import ImageCrop from './ImageCrop';

export default function Camera() {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //method for camera capture
  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: "user"
  };
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  
  return (
    <div>
      <div className="container-fluid" >
        <Webcam 
          audio={false}
          height={1080}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1920}
          videoConstraints={videoConstraints}
          className="video-element"
        />
        <button onMouseDown={capture} onMouseUp={toggle} className="btn camera-btn" ><i class="fas fa-camera"></i> </button>
      </div>
      {/* Modal after clicking capture button */}
      <Modal size="xl" className="modal"  centered fade isOpen={modal} toggle={toggle} >
        <ModalBody  >
          <ImageCrop image={imgSrc} btn="Click another Pic" toggle={toggle}/>
        </ModalBody>
      </Modal>
    </div>  
  )
}

