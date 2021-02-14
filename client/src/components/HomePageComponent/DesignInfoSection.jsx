import React from 'react';
import styled from 'styled-components';

import img7 from '../../assets/images/7.jpg';

const DesignInfoSection = () => {
    return (
        <DesignInfoSectionContainer>
            <section>
                <div className="titledesign">
                    design that matters
                </div>
                <div className="titleseconddesign">
                    Insight meets impact
                </div>
                <div className="seconddesign">
                We work with collaborative, environmentally-conscious companies that pair their passion with purpose. With award-winning design, a clear aesthetic, and the tenacity to create positive change, we help convey your brand’s mission with a visual identity that speaks volumes.

                Every great brand has an even better purpose behind it, and it takes experience, transparency, and curiosity to set it apart. Luckily we’ve got that in spades. Through our commitment to intentional design, we create new ways to share your singular story and help you make a difference in the world.
                </div>

                <div className="img7">
                    <img src={img7} />
                </div>
            </section>
        </DesignInfoSectionContainer>
    )
}

export default DesignInfoSection;

const DesignInfoSectionContainer = styled.div`

    margin: 1rem;


    .titledesign {
        font-size: 4.8em;
        color: var(--main-grey);
        letter-spacing: .06em;
        font-weight: bold;
    }

    .titleseconddesign {
        color: var(--main-black-light);
    }

    .seconddesign {
        color: var(--main-grey-light);
    }

    .img7 {
        width: 25rem;
        height: 35rem;
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover; max-width: 100%;
    }

    section {
        display: grid;
        grid-template-columns: repeat(30, 1fr);
        position: relative;
        width: 100%;
        overflow: hidden;
    }


    .img7 {
        grid-column: 5 / 14;
        position: relative;
        z-index: -2;
    }

    .titledesign {
        grid-column: 15 / 30;
        position:absolute;
        left: -20rem;
        z-index: 4;
    }

    .titleseconddesign {
        grid-column: 17 / 30;
        position:absolute;
        top: 10rem;

        max-width: 75%;
        line-height: 1.1em;
        z-index: 2;

        font-size: 1.8rem;
        font-weight: 400;
        
        color: var(--main-black-light);
        letter-spacing: .06em;
    }

    .seconddesign {
        grid-column: 17 / 30;
        position:absolute;
        top: 13rem;

        max-width: 85%;
        
        font-size: 1rem;
        line-height: 1.53em;
        letter-spacing: .02em;
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
}

/* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */

section {
    height: 30vh;
}

.titledesign {
        font-size: 1.0em;
        color: var(--main-grey);
        letter-spacing: .06em;
        font-weight: bold;
        left: -8rem;
    }

    .titleseconddesign {
        top: 2.5rem;
        left: -8rem;

        max-width: 100%;


        font-size: 0.3rem;
        font-weight: 600;
    }

    .seconddesign {
        top: 3rem;
        left: -8rem;
        max-width: 100%;
        
        font-size: 0.2rem;
        line-height: 1.53em;
        letter-spacing: .02em;
    }

    img {
        position:absolute;
        left: 1.5rem;
        object-fit: cover; max-width: 40%; max-height: 50%;
    }
}

/* iPhone 6, 7, 8 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
}

@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */

section {
    height: 30vh;
}

.titledesign {
        font-size: 1.5em;
        color: var(--main-grey);
        letter-spacing: .06em;
        font-weight: bold;
        left: -10rem;
    }

    .titleseconddesign {
        top: 2.5rem;
        left: -11rem;

        max-width: 100%;


        font-size: 0.5rem;
        font-weight: 600;
    }

    .seconddesign {
        top: 3.5rem;
        left: -11rem;
        max-width: 100%;
        
        font-size: 0.3rem;
        line-height: 1.53em;
        letter-spacing: .02em;
    }

    img {
        position:absolute;
        left: 2.5rem;
        object-fit: cover; max-width: 50%;
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

section {
    height: 30vh;
}

.titledesign {
        font-size: 1.5em;
        color: var(--main-grey);
        letter-spacing: .06em;
        font-weight: bold;
        left: -10rem;
    }

    .titleseconddesign {
        top: 2.5rem;
        left: -11rem;

        max-width: 100%;


        font-size: 0.5rem;
        font-weight: 600;
    }

    .seconddesign {
        top: 3.5rem;
        left: -11rem;
        max-width: 100%;
        
        font-size: 0.3rem;
        line-height: 1.53em;
        letter-spacing: .02em;
    }

    img {
        position:absolute;
        left: 2.5rem;
        object-fit: cover; max-width: 50%;
    }
}

/* iPhone XS Max, XR ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */

}

@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */

section {
    height: 30vh;
}

.titledesign {
        font-size: 1.5em;
        color: var(--main-grey);
        letter-spacing: .06em;
        font-weight: bold;
        left: -10rem;
    }

    .titleseconddesign {
        top: 2.5rem;
        left: -11rem;

        max-width: 100%;


        font-size: 0.5rem;
        font-weight: 600;
    }

    .seconddesign {
        top: 3.5rem;
        left: -11rem;
        max-width: 100%;
        
        font-size: 0.3rem;
        line-height: 1.53em;
        letter-spacing: .02em;
    }

    img {
        position:absolute;
        left: 2.5rem;
        object-fit: cover; max-width: 50%;
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

section {
    height: 30vh;
}

.titledesign {
        font-size: 1.5em;
        color: var(--main-grey);
        letter-spacing: .06em;
        font-weight: bold;
        left: -8rem;
    }

    .titleseconddesign {
        top: 2.5rem;
        left: -8rem;

        max-width: 100%;


        font-size: 0.5rem;
        font-weight: 600;
    }

    .seconddesign {
        top: 3.5rem;
        left: -8rem;
        max-width: 100%;
        
        font-size: 0.3rem;
        line-height: 1.53em;
        letter-spacing: .02em;
    }

    img {
        position:absolute;
        left: 2.5rem;
        object-fit: cover; max-width: 45%;
    }
}
`;
