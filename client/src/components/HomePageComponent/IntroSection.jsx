import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/images/6.jpg';

const IntroSection = () => {
    return (
        <IntroContainer>
            <main>
                <div className="gridwrapper">
                    <div className="containerT">
                    <div className="title">
                    We believe in a simple and timeless design
                    </div>
                    <div className="subtitle">
                    Our creative approach is based on the concept of lightness initiated by Marc Berthier: a global reflection on liberty, mobility, modernity, technologies, economy and ecology.

                    Our goal is to create objects with a durable style, manufactured with care, offering a meaningful experience.
                    </div>
                    </div>
                    <div className="Img1">
                      <img src={img1} />
                    </div>
                </div>
            </main>
        </IntroContainer>
    )
}

export default IntroSection;

const IntroContainer = styled.div`


    .title {
        font-family: var(--main-text);
        font-size: 3rem;
        line-height: 90%;
        margin: .2em 0 .4em 0;
        letter-spacing: 0.06em;
        color: var(--main-black);
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        font-weight: 800;
    }

    .subtitle {
        margin-top: 2.2rem;
        margin-right: 7rem;
        width: fit-content;
        font-family: var(--main-text);
        font-size: 1rem;
        line-height: 1.53em;
        letter-spacing: .02em;
        color: var(--main-black-light);
        
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
}

main {
      display: grid;
      grid-template-columns: repeat(30, 1fr);
      position: relative;
    }

    .gridwrapper {
      grid-column: 1 / 31;
      display: grid;
      grid-template-columns: repeat(15, 1fr);
      position: relative;
    }

    .containerT {
        grid-column: 2 / 8;
        font-weight: 400;
        line-height: 1.3;
        margin: 3.5rem;
        z-index: 2;
        position:absolute;
        font-size: calc(var(--max-font) * 1px);
        
    }

    
    .Img1 {
        grid-column: 8 / 16;
        z-index: -1;
        left: -15rem;
        position: relative;
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
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
/* Styles */
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
/* Styles */
}
/**********
iPad 3
**********/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
.title {
        font-size: 2.1rem;
        line-height: 90%;
        margin: 0 0 0 0;
        letter-spacing: 0.06em;
        font-weight: 800;
        position: absolute;
        top: 10%;
        left: 20%;
    }

    img {
object-fit: cover; max-width: 100%;
}

.Img1 {
        grid-column: 8 / 16;
        z-index: -1;
        left: -4.8rem;
        position: relative;
    }

    .containerT {
        margin: 1rem;
        position: relative;

        
    }

    .subtitle {
        margin-top: 0.2rem;
        margin-right: 1rem;
        font-size: 0.8rem;
        line-height: 1.53em;
        position: absolute;
        top: 40%;
        left: 20%;
    }
}
/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1224px) {
/* Styles */
}

/* Large screens ----------- */
@media only screen  and (min-width : 1824px) {
/* Styles */
}

/* iPhone 4 ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
.title {
        font-size: 0.5rem;
        line-height: 90%;
        margin: 0 0 0 0;
        letter-spacing: 0.06em;
        font-weight: 800;
        position: absolute;
        top: 0%;
        left: 20%;
    }

    img {
object-fit: cover; max-width: 100%;
}

.Img1 {
        grid-column: 8 / 16;
        z-index: -1;
        left: -2.5rem;
        position: relative;
    }

    .containerT {
        margin: 1rem;
        position: relative;

        
    }

    .subtitle {
        margin-top: 0.2rem;
        margin-right: 1rem;
        font-size: 0.25rem;
        line-height: 1.53em;
        position: absolute;
        top: 30%;
        left: 20%;
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
.title {
        font-size: 0.7rem;
        line-height: 90%;
        margin: 0 0 0 0;
        letter-spacing: 0.06em;
        font-weight: 800;
        position: absolute;
        top: 0%;
        left: 20%;
    }

    img {
object-fit: cover; max-width: 100%;
}

.Img1 {
        grid-column: 8 / 16;
        z-index: -1;
        left: -2.5rem;
        position: relative;
    }

    .containerT {
        margin: 1rem;
        position: relative;

        
    }

    .subtitle {
        margin-top: 0.2rem;
        margin-right: 1rem;
        font-size: 0.3rem;
        line-height: 1.53em;
        position: absolute;
        top: 40%;
        left: 20%;
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

}

/* iPhone XS Max, XR ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
}

@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.title {
        font-size: 0.8rem;
        line-height: 90%;
        margin: 0 0 0 0;
        letter-spacing: 0.06em;
        font-weight: 800;
        position: absolute;
        top: 0%;
        left: 20%;
    }

    img {
object-fit: cover; max-width: 100%;
}

.Img1 {
        grid-column: 8 / 16;
        z-index: -1;
        left: -2.5rem;
        position: relative;
    }

    .containerT {
        margin: 1rem;
        position: relative;

        
    }

    .subtitle {
        margin-top: 0.2rem;
        margin-right: 1rem;
        font-size: 0.3rem;
        line-height: 1.53em;
        position: absolute;
        top: 40%;
        left: 20%;
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
}

@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
}
`;
