import { useState } from 'react';


function Slide ({image}) {
  const [index, setIndex] = useState(0);
  
  const previousImage = () => {
    setIndex(index => {
        index--;
        return index < 0 ? index = image.length-1 : index;
      });
  };

  const nextImage = () => {
    setIndex(index => {
        index++;
        return index >= image.length ? index = 0 : index;
      });
  };

    return (      
      <div className="catalog_image">
        <button className="slide_btn prev" onClick={previousImage} style={image.length <= 1 ? {display: 'none'} : {display: 'block'}}><img src="img/icon/arrow_prev.png" alt="previos"/></button>
        <img src={image[index]} alt="новая коллекция" />
        <button className="slide_btn next" onClick={nextImage}  style={image.length <= 1 ? {display: 'none'} : {display: 'block'}}><img src="img/icon/arrow_next.png" alt="previos"/></button>
      </div> 
    )
  };

export default Slide;