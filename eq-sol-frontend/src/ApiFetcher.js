
//here comes the main phase, where the cropped image from ImageCrop, via Upload or Camera component is passed to backend\
//We use REST API technology where we using post method call an API using a link from backend and with it send Image.
//the reply would contain answers we needed, it is converted to string form and pass all the answers to Answer Component
//which displays answer, visit Answer.js
import React, {useEffect, useState } from 'react'
import Answer from './Answer';
import i  from './images/my_download_name.png'

const blobToBase64 = blob => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise(resolve => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};

export default function ApiFetcher(props) {

    const [error,Seterror] = useState(0);
    const [isLoaded,SetisLoaded] = useState(false);
    const [test, SetTest] = useState(0);
    
    const [EqnImg,SetEqnImg] = useState(0);
    const [Ans,SetAns] = useState(0);
    var a = {
      Eqn:"5x + 3 = 23",
      TypeEqn:"Linear Equation",
      EqnAns:"x = 4"
      };

    

    useEffect(() => {
      let img = (props.location.state.image);
      SetEqnImg(img.split(',')[1])
      // console.log(img)
      fetch('http://127.0.0.1:5000/api',{ //fetch() with backend api as parameter
        method:'POST', //method 'POST'
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({   //body is the object going with api request
          image:EqnImg          //image EqnImg in base64 string attached
        })
      })
        .then(Response => Response.json()) //response converted to json
        .then( 
          (data) => {
            SetisLoaded(true);
            SetAns(data);       //SetAns assigns content of data to react state(a variable)            
          }
        )
        
  });
    if (error) {
        
      return <div className=" container text-center home-para" style={{marginTop:"50px",fontSize:"40px"}}>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return(
            <div className="container" >
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        ) 
      } else {
        return (
            <div>
                <Answer Ans={Ans}/>
              
                </div>
        );
      }
    

    
}
