
//here it does is, displays image like normal img we get from props, we can drag over the image in any aspect rectangle and crop the image.
//Here we use react-image-crop module for this, also ReactCrop.css to style the crop box
//after selecting, the cropped image is sent to ApiFetcher Component when we click proceed btn, visit ApiFetcher.js
import React, {Component} from 'react'
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';
import { Link } from 'react-router-dom';
import { triggerBase64Download } from 'react-base64-downloader';
 
export default class ImageCrop extends Component {
  state = {
    src: null,
    crop: {
    },
  };

  //below is code for crop image activation
  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };
    
  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };
    
  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };
    
  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };
    
  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }
    
  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
    
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL('image/png');
    // triggerBase64Download(base64Image, 'my_download_name')
    return base64Image

    // return new Promise((resolve, reject) => {
    //   canvas.toBlob(blob => {
    //     if (!blob) {
    //       //reject(new Error('Canvas is empty'));
    //       console.error('Canvas is empty');
    //       return;
    //     }
    //     blob.name = fileName;
    //     window.URL.revokeObjectURL(this.fileUrl);
    //     this.fileUrl = window.URL.createObjectURL(blob);
    //     resolve(this.fileUrl);
    //   }, 'image/jpeg');
    // });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;
    return (
      <div className="container">
        <div style={{height:"25px"}} ></div>
        <p className="text-center ">Drag over the image to crop the respective equation.</p>
        <div className="row">
          <ReactCrop src={this.props.image} crop={crop} className="img-fluid crop-image" ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange} 
          />
      </div>
      <div className="row justify-content-center">
        <div >
          {console.log(this.props.link)}
          <Link onClick={this.props.toggle}><button className="btn btn-home" style={{margin:"0px"}} >{this.props.btn}</button> </Link>
          {/* here we pass the image to the API Fetcher component */}
          <Link to={{
            pathname:"/answer",
            state: {
              image:croppedImageUrl
            }
          }}>
            <button className="btn btn-home" style={{margin:"20px"}} >Proceed</button>
          </Link>
        </div>
      </div>
      </div>
    )
  }
}
