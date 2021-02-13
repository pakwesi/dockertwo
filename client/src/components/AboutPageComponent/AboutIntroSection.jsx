import React from 'react';
import styled from 'styled-components';

import img from '../../assets/images/16.png';

const AboutIntroSection = () => {
    return (
        <AboutIntroSectionContainer>
            <section>
                <div className="abtitle">
                Who We Are
                </div>
                <div className="absub">
                Pakwesi Creative is a digital agency specializing in marketing & custom websites that stir emotion, have personality and drive results.
                </div>
                <div className="abtext">
                We get up in the morning because we love what we do, making impactful websites come to life while helping people like you make a dent in the world. Our 9-5 isn't dull and neither should yours be. Laughter, it makes work more fun and transforms projects into a passion rather than a task. We’ll treat you fairly, share some humor, work with you to solve your complex problems and achieve your goals.
                </div>
                <div className="abimg">
                   <img src={img} />
                </div>

            </section>
        </AboutIntroSectionContainer>
    )
}

export default AboutIntroSection;


const AboutIntroSectionContainer = styled.div`
    margin: 4rem;
    position: relative;

    .abtitle {
        font-size: 4.8em;
        color: var(--main-grey);
        letter-spacing: .06em;
        font-weight: bold;
    }

    .absub {
        color: var(--main-black-light);
    }

    .abtext {
        color: var(--main-black);
    }

    .abimg {
        width: 25rem;
        height: 35rem;
    }

    img {
        width: 100%;
        height: auto;
    }

    section {
        display: grid;
        grid-template-columns: repeat(30, 1fr);
        position: relative;
    }


    .abimg {
        grid-column: 5 / 14;
        position: absolute;
        z-index: -2;
    }

    .abtitle {
        grid-column: 15 / 30;
        position:absolute;
        left: -5rem;
        z-index: 4;
    }

    .absub {
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

    .abtext {
        grid-column: 17 / 30;
        position:absolute;
        top: 25rem;

        max-width: 85%;
        margin-bottom: 2.35rem;
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
.abtitle {
        font-size: 5.1em;
        left: -1.5rem;
    }

  img {
object-fit: cover; max-width: 100%;
}

.abimg {
        left: 1.5rem;
    }

    .absub {
        top: 5.5rem;
        left: -1rem;
        max-width: 100%;

        font-size: 1.5rem;
        font-weight: 200;

    }

    .abtext {

        top: 15rem;
        left: -1.5rem;

        max-width: 100%;
        margin-bottom: 2.35rem;
        font-size: 0.8rem;
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
.abtitle {
        font-size: 1.1em;
        left: -5rem;
    }

  img {
object-fit: cover; max-width: 40%;
}

.abimg {
        left: 2.5rem;
    }

    .absub {
        top: 1.5rem;
        left: -5.5rem;
        max-width: 100%;

        font-size: 0.5rem;
        font-weight: 200;

    }

    .abtext {

        top: 6rem;
        left: -5.5rem;

        max-width: 100%;
        margin-bottom: 2.35rem;
        font-size: 0.3rem;
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
.abtitle {
        font-size: 1.1em;
        left: -8rem;
    }

  img {
object-fit: cover; max-width: 50%;
}

.abimg {
        left: 2.5rem;
    }

    .absub {
        top: 1.5rem;
        left: -8.5rem;
        max-width: 100%;

        font-size: 0.5rem;
        font-weight: 200;

    }

    .abtext {

        top: 6rem;
        left: -8.5rem;

        max-width: 100%;
        margin-bottom: 2.35rem;
        font-size: 0.3rem;
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
.abtitle {
        font-size: 1.1em;
        left: -8rem;
    }

  img {
object-fit: cover; max-width: 50%;
}

.abimg {
        left: 2.5rem;
    }

    .absub {
        top: 1.5rem;
        left: -8.5rem;
        max-width: 100%;

        font-size: 0.5rem;
        font-weight: 200;

    }

    .abtext {

        top: 6rem;
        left: -8.5rem;

        max-width: 100%;
        margin-bottom: 2.35rem;
        font-size: 0.3rem;
    }
}

/* iPhone XS Max, XR ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */

}

@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.abtitle {
        font-size: 1.1em;
        left: -8rem;
    }

  img {
object-fit: cover; max-width: 50%;
}

.abimg {
        left: 2.5rem;
    }

    .absub {
        top: 1.5rem;
        left: -8.5rem;
        max-width: 100%;

        font-size: 0.5rem;
        font-weight: 200;

    }

    .abtext {

        top: 6rem;
        left: -8.5rem;

        max-width: 100%;
        margin-bottom: 2.35rem;
        font-size: 0.3rem;
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