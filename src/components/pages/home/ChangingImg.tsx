import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import image1 from '../../../photo/changigBackground/1.jpeg';
import image2 from '../../../photo/changigBackground/2.jpeg';
import image3 from '../../../photo/changigBackground/3.jpeg';
import image4 from '../../../photo/changigBackground/4.jpeg';
import image5 from '../../../photo/changigBackground/5.jpeg';
import image6 from '../../../photo/changigBackground/6.jpeg';
import '../../../style/image.css';

const images = [image1, image2, image3, image4, image5, image6];

function PagesHomeChangingImg() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setCurrentImage(randomImage);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Grid item>
      <img className="changing-image" src={image2} alt={'changingImages'} />
    </Grid>
  );
}
export { PagesHomeChangingImg };
