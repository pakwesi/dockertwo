import React from 'react';
import styled from 'styled-components';

import img1 from '../../assets/images/2.jpg';

const TextSection = () => {
    return (
        <TextContainer>
            <section className="sectiongrid">
                <div className="title">
                Beautiful ideas come at a price.
                </div>
                <div className="p">
                    P
                </div>
                <div className="buttons">
                <div className="container">
                    <h1>歪みエフェクト</h1>
                    <p>Distortion Effect</p>
                    <a href="https://twitter.com/masuwa1018" className="btn effect04" data-sm-link-text="CLICK" target="_blank"><span>HOVER</span></a>
                </div>
                </div>

           
            </section>
        </TextContainer>
    )
}

export default TextSection;


const TextContainer = styled.div`

    margin: 1rem;
    color: #fff;
    text-align: center;
    background-image: url(img1);
    background-size: cover;
    font-family: Merriweather, serif;
    font-weight: 300;
    padding-top: 4em;
    padding-bottom: 4.5em;
    overflow: hidden;
    position: relative;
    

    .sectiongrid {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: 1fr 20%;
        overflow: hidden;
        width: 100vw;
    }

    .title {
        margin: 4rem;
        text-transform: uppercase;
        font-size: 5em;
        font-weight: 700;
        line-height: 0.9em;
        color: var(--main-black);
        text-align: left;

        grid-column: 1 / 6;
    }

    .p {
        
        text-transform: uppercase;
        font-size: 20em;
        font-weight: 700;
        line-height: 0.9em;
        color: var(--main-black);
        transform: rotate(-90deg);

        grid-column: 8 / 9;

        position: absolute;
        left: 82rem;
        top: 35px;
    }

    .title {
        grid-column: 1 / 6;
    }




    .buttons {
        
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      width: 100%;
      height: 100%;
      margin: 0 auto;

      grid-column: 1 / 3;
      grid-row: 2;
/*   padding: 2em 0em; */
      position: absolute;
      top: 10rem;
      right: 35rem;
      z-index: 3;
}

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
  padding:  40px 0px;
  width: 240px;
}

h1 {
  text-align: left;
  color: #444;
  letter-spacing: 0.05em;
  margin: 0 0 0.4em;
  font-size: 1em;
}

p {
  text-align: left;
  color: #444;
  letter-spacing: 0.05em;
  font-size: 0.8em;
  margin: 0 0 2em;
}


.btn {
  letter-spacing: 0.1em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
}
.btn:hover {
  text-decoration: none;
}

/*btn_background*/
.effect04 {
  --uismLinkDisplay: var(--smLinkDisplay, inline-flex);
  display: var(--uismLinkDisplay);
  color: #000;
  outline: solid  2px #000;
  position: relative;
  transition-duration: 0.4s;
  overflow: hidden;
}

.effect04::before,
.effect04 span{
    margin: 0 auto;
	transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
	transition-duration: 0.4s;
}

/* 文字1を上に */
.effect04:hover{

  background-color: #000;
}

/* HOVERしたら文字1を上に */
.effect04:hover span{
  -webkit-transform: translateY(-400%) scale(-0.1,20);
          transform: translateY(-400%) scale(-0.1,20);
}

/*文字2*/
.effect04::before{
  content: attr(data-sm-link-text);
	color: #FFF;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  -webkit-transform: translateY(500%) scale(-0.1,20);
          transform: translateY(500%) scale(-0.1,20);
}

/* HOVERしたら文字2を上に */
.effect04:hover::before{
  letter-spacing: 0.05em;
  -webkit-transform: translateY(0) scale(1,1);
          transform: translateY(0) scale(1,1);
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* Styles */
}

/* Smartphones (landscape) ----------- */
@media only screen and (min-width : 321px) {
/* Styles */
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 320px) {
/* Styles */
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
/* Styles */
.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 4rem;
        font-size: 5em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 20em;
        font-weight: 700;
        line-height: 0.9em;
        left: 52rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 10rem;
        right: 20rem;
        z-index: 3;
  }
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
/* Styles */
.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 4rem;
        font-size: 5em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 20em;
        font-weight: 700;
        line-height: 0.9em;
        left: 52rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 10rem;
        right: 20rem;
        z-index: 3;
  }
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
/* Styles */
.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 4rem;
        font-size: 5em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 20em;
        font-weight: 700;
        line-height: 0.9em;
        left: 52rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 10rem;
        right: 20rem;
        z-index: 3;
  }
}
/**********
iPad 3
**********/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 4rem;
        font-size: 5em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 20em;
        font-weight: 700;
        line-height: 0.9em;
        left: 52rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 10rem;
        right: 20rem;
        z-index: 3;
  }
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */

.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 4rem;
        font-size: 5em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 20em;
        font-weight: 700;
        line-height: 0.9em;
        left: 52rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 10rem;
        right: 20rem;
        z-index: 3;
  }
}
/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1224px) {
/* Styles */

  padding-bottom: 9.5em;
.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 4rem;
        font-size: 5em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 20em;
        font-weight: 700;
        line-height: 0.9em;
        left: 75rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 10rem;
        right: 30rem;
        z-index: 3;
  }
}

/* Large screens ----------- */
@media only screen  and (min-width : 1824px) {
/* Styles */
padding-bottom: 9.5em;
.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 4rem;
        font-size: 5em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 20em;
        font-weight: 700;
        line-height: 0.9em;
        left: 102rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 10rem;
        right: 45rem;
        z-index: 3;
  }
}

/* iPhone 4 ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */

}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
  padding-top: 1em;
  padding-bottom: 3.5em;
.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 1rem;
        font-size: 2em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 8em;
        font-weight: 700;
        line-height: 0.9em;
        left: 14rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 4rem;
        right: 5rem;
        z-index: 3;
        transform: scale(0.51145833333, 0.51111111111);
  }
}

/* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */

}

@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

/* iPhone 6, 7, 8 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */

}

@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
  padding-top: 1em;
  padding-bottom: 3.5em;
.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 1rem;
        font-size: 2em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 10em;
        font-weight: 700;
        line-height: 0.9em;
        left: 17rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 3rem;
        right: 7rem;
        z-index: 3;
        transform: scale(0.51145833333, 0.51111111111);
  }
}

/* iPhone 6+, 7+, 8+ ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */

}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */


}

/* iPhone X ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */

}

@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
padding-top: 1em;
  padding-bottom: 3.5em;
.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 1rem;
        font-size: 2em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 10em;
        font-weight: 700;
        line-height: 0.9em;
        left: 17rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 3rem;
        right: 7rem;
        z-index: 3;
        transform: scale(0.51145833333, 0.51111111111);
  }
}

/* iPhone XS Max, XR ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */

}

@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
  padding-top: 1em;
  padding-bottom: 3.5em;
.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 1rem;
        font-size: 2em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 10em;
        font-weight: 700;
        line-height: 0.9em;
        left: 20rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 3rem;
        right: 8rem;
        z-index: 3;
        transform: scale(0.51145833333, 0.51111111111);
  }
}

/* Samsung Galaxy S3 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

/* Samsung Galaxy S4 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
}

/* Samsung Galaxy S5 ----------- */
@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
padding-top: 1em;
  padding-bottom: 3.5em;
.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 1rem;
        font-size: 2em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 10em;
        font-weight: 700;
        line-height: 0.9em;
        left: 20rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 3rem;
        right: 8rem;
        z-index: 3;
        transform: scale(0.51145833333, 0.51111111111);
  }
}

@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
padding-top: 1em;
  padding-bottom: 3.5em;
.sectiongrid {
  width: 100%;
  
    }

.title {
        margin: 1rem;
        font-size: 2em;
        font-weight: 700;
        line-height: 0.9em;
    }

    .p {
        font-size: 10em;
        font-weight: 700;
        line-height: 0.9em;
        left: 16rem;
        top: 35px;
    }

    .buttons {  
  /*   padding: 2em 0em; */
        top: 4rem;
        right: 7rem;
        z-index: 3;
        transform: scale(0.51145833333, 0.51111111111);
  }
}

`;