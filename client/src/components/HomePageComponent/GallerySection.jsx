import React from 'react';
import styled from 'styled-components';
import img20 from '../../assets/images/20.JPG';
import img21 from '../../assets/images/21.JPG';
import img22 from '../../assets/images/22.JPG';
import img23 from '../../assets/images/23.JPG';
import img24 from '../../assets/images/24.JPG';


const GallerySection = () => {
    return (
        <GallerySectionContainer>
        <div class="containergal">
        <h1>Gallery</h1>
      
        <div class="gallery-wrap">
          <div class="item item-1"></div>
          <div class="item item-2"></div>
          <div class="item item-3"></div>
          <div class="item item-4"></div>
          <div class="item item-5"></div>
        </div>
       </div>
      
      <div class="social">
        <a href="https://twitter.com/StefCharle" target="_blank">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/149103/twitter.svg" alt="" />
        </a>
      </div>
        </GallerySectionContainer>
    )
}

export default GallerySection;

const GallerySectionContainer = styled.div`

  width: 100%;
  height: 100%;


.containergal {
  padding: 75px 0;
  margin: 0 auto;
  width: 80rem;
}

h1 {
  position: relative;
  margin-bottom: 45px;
  font-family: 'Oswald', sans-serif;
  font-size: 44px;
  text-transform: uppercase;
  color: #424242;
}

.gallery-wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70vh;
}

.item {
  flex: 1;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  transition: flex 0.8s ease;
  
  &:hover{
    flex: 7;
  }
}

.item-1 { 
  background-image: url(${img20});
}

.item-2 { 
  background-image: url(${img21});
}

.item-3 { 
  background-image: url(${img22});
}

.item-4 { 
  background-image: url(${img23});
}

.item-5 { 
  background-image: url(${img24});
}

.social{
  position: absolute;
  right: 35px;
  bottom: 0;
  
  img{
    display: block;
    width: 32px;
  }
}
`;
