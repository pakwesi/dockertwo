import React from 'react';
import styled from 'styled-components';
import img3 from '../../assets/images/4.jpg';
import { NavLink, Link } from 'react-router-dom';

const HeaderSection = () => {
    return (
        <SectionContainer className="sectiongrid">
            <main className="maingrid">
             <div className="title">
                We design financial products for You
             </div>
             <div className="img-container">
             <img src={img3} />
             </div>
            </main>
            <div className="gridtext">
                Start planning your next 30 years in 30 seconds
            </div>
            <div className="gridbutton">
            <a href="/about">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                
                Learn About Us
            </a>
            </div>
            
            <a className="Follow" href="https://github.com/pakwesi" target="blank_"></a>
        </SectionContainer>
    )
}

export default HeaderSection;

const SectionContainer = styled.section`
    
    
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr 20%;
    background-color: var(--main-grey);
    

    .maingrid {
        grid-column: 1 / 9;
        grid-row: 1 / 2;
        position: relative;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }

    .title {
        position: absolute;
        grid-column: 1 / 3;
        grid-row: 2 / 4;
        z-index: 1;
        transform: rotate(-30deg);
        
        background-color: var(--main-white);
        color: var(--main-black);
        font-size: 3.5em;
        font-weight: 900;
        line-height: 1.1em;
        padding: 2rem;
    }

    .img-container {
        grid-column: 2 / 5;
        grid-row: 1 / 4;
        overflow:hidden;
        object-fit: contain;
    }

    .img-container img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: rotate(-30deg);
    }

    img {
        width: 100%;
    }

    .gridtext {
        grid-column: 2 / 6;
        grid-row: 2;
        background-color: var(--main-grey-light);

        font-family: Merriweather, serif;
        font-weight: 300;
        color: var(--main-black);
        font-size: 1.8em;
        line-height: 1em;
        padding: 2rem;
    }

    .gridbutton {
        grid-column: 6 / 7;
        grid-row: 2;
        background-color: var(--main-brown);
        a {
            color: #ffffff !important;
            text-decoration: none;
            text-align:center;
            position: absolute;
            top: 50%;
            left: 50%;
            font-size: 30px;
            padding: 10px 20px;
            letter-spacing: 3px;
            transform: translate(-50%, -50%);
            text-transform: uppercase;
            max-width: 100%;
            overflow-x: hidden;
            box-shadow: 0px 20px 50px #000000ab;
                overflow:hidden;

            }

            a:before {
            content: '';
            top: 2px;
            left: 2px;
            bottom: 2px;
            position: absolute;
            width: 50%;
            background: var(--main-brown);
            opacity: .5;
            }

            a span:nth-child(1) 
            {
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, #8e6a4a, #8e6a4a, #8e6a4a);
            position:absolute;
            animation: animate1 2s linear infinite paused;
            }

            @keyframes animate1 {
            0% {
                transform: translateX(-100%);
            }
            
            100% {
                    transform: translateX(100%);

            }
            }

            a span:nth-child(2) 
            {
            top: 0;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(to bottom, #7f563c, #7f563c, #7f563c);
            position:absolute;
            animation: animate2 2s linear infinite paused;
            }

            @keyframes animate2 {
            0% {
                transform: translateY(-100%);
            }
            
            100% {
                    transform: translateY(100%);

            }
            }

            a span:nth-child(3) 
            {
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(to left, #7f563c, #7f563c, #7f563c);
            position:absolute;
            animation: animate3 2s linear infinite paused;
            }

            @keyframes animate3 {
            0% {
                transform: translateX(100%);
            }
            
            100% {
                    transform: translateX(-100%);

            }
            }

            a span:nth-child(4) 
            {
            top: 0;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(to top, #8e6a4a, #8e6a4a, #8e6a4a);
            position:absolute;
            animation: animate4 2s linear infinite paused;
            }

            @keyframes animate4 {
            0% {
                transform: translateY(100%);
            }
            
            100% {
                    transform: translateY(-100%);

            }
            }


            a:hover span:nth-child(1),
            a:hover span:nth-child(2),
            a:hover span:nth-child(3),
            a:hover span:nth-child(4) {
            animation-play-state: running;
            
            }
    }

    /*  FOLLOW*/
        .Follow {	  
            background:url("https://pbs.twimg.com/profile_images/959092900708544512/v4Db9QRv_bigger.jpg")no-repeat center / contain;
            width: 50px;
            height: 50px;
            bottom: 9px;
            right: 20px;
            display:block;
            position:fixed;
            border-radius:50%;
            z-index:999;
            animation-name: spin;
            animation-duration: 5000ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            }


            @keyframes spin {
            from {
                transform:rotate(0deg);
            }
            to {
                transform:rotate(360deg);
            }
        }

    /* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* Styles */
.gridtext {

        font-weight: 300;
        font-size: 0.8em;
        line-height: 1em;
        padding: 1rem;
    }

.title {
font-size: 1em;
padding: 1rem;
}

.gridbutton {

    a {
        top: 26%;
        left: 50%;
        font-size: 7px;
        padding: 10px 20px;

}

}

img {
    object-fit: cover; max-width: 100%;
    }

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
.gridbutton {

a {
    top: 50%;
    left: 50%;
    font-size: 7px;
    padding: 20px 30px;

}
}

}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
.gridtext {

font-size: 1.80em;
line-height: 1em;
padding: 2rem;
}

.title {
font-size: 2.3em;
}

.gridbutton {

    a {
        top: 28%;
        left: 50%;
        font-size: 7px;
        padding: 20px 30px;

}
}

}
/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1224px) {
/* Styles */
.gridtext {

font-size: 1.80em;
line-height: 1em;
padding: 2rem;
}

.title {
font-size: 3.3em;
}

.gridbutton {

    a {
        top: 45%;
        left: 50%;
        font-size: 20px;
        padding: 20px 30px;

}
}
}

/* Large screens ----------- */
@media only screen  and (min-width : 1824px) {
/* Styles */
.gridtext {

font-size: 2.80em;
line-height: 1em;
padding: 2rem;
}

.title {
font-size: 4.3em;
}

.gridbutton {

    a {
        top: 40%;
        left: 50%;
        font-size: 40px;
        padding: 20px 30px;

}
}
}

/* iPhone 4 ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
.gridtext {

font-weight: 300;
font-size: 0.6em;
line-height: 1em;
padding: 1rem;
}

.title {
font-size: 0.8em;
padding: 1rem;
}

.gridbutton {

a {
top: 25%;
left: 50%;
font-size: 7px;
padding: 10px 20px;

}

}

img {
object-fit: cover; max-width: 100%;
}
}

/* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */

}

@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.gridtext {

font-weight: 300;
font-size: 0.6em;
line-height: 1em;
padding: 1rem;
}

.title {
font-size: 0.8em;
padding: 1rem;
}

.gridbutton {

a {
top: 30%;
left: 50%;
font-size: 7px;
padding: 10px 20px;

}

}

img {
object-fit: cover; max-width: 100%;
}

}


/* iPhone 6, 7, 8 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.gridtext {

font-weight: 300;
font-size: 0.8em;
line-height: 1em;
padding: 2rem;
}

.title {
font-size: 5em;
padding: 5rem;
}

.gridbutton {

a {
top: 30%;
left: 50%;
font-size: 7px;
padding: 10px 20px;

}

}

img {
object-fit: cover; max-width: 100%;
}

}

@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.gridtext {

font-weight: 300;
font-size: 0.8em;
line-height: 1em;
padding: 1rem;
}

.title {
font-size: 0.8em;
padding: 1rem;
}

.gridbutton {

a {
top: 28%;
left: 50%;
font-size: 7px;
padding: 10px 20px;

}

}

img {
object-fit: cover; max-width: 100%;
}

}

/* iPhone 6+, 7+, 8+ ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.gridtext {

font-weight: 300;
font-size: 0.8em;
line-height: 1em;
padding: 2rem;
}

.title {
font-size: 1em;
padding: 1rem;
}

.gridbutton {

a {
top: 30%;
left: 50%;
font-size: 7px;
padding: 10px 20px;

}

}

img {
object-fit: cover; max-width: 100%;
}

}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.gridtext {

font-weight: 300;
font-size: 0.8em;
line-height: 1em;
padding: 1rem;
}

.title {
font-size: 1em;
padding: 1rem;
}

.gridbutton {

a {
top: 30%;
left: 50%;
font-size: 7px;
padding: 10px 20px;

}

}

img {
object-fit: cover; max-width: 100%;
}
}

/* iPhone X ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.gridbutton {

a {
top: 20%;
left: 50%;
font-size: 7px;
padding: 10px 20px;

}

}

}

@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.gridbutton {

a {
top: 23%;
left: 50%;
font-size: 7px;
padding: 10px 20px;

}

}
}

/* iPhone XS Max, XR ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
}

@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
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

@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: portrait) {
    .gridtext {

font-weight: 300;
font-size: 0.8em;
line-height: 1em;
padding: 1rem;
}

.title {
font-size: 1em;
padding: 1rem;
}

.gridbutton {

a {
top: 30%;
left: 50%;
font-size: 7px;
padding: 10px 20px;

}

}

img {
object-fit: cover; max-width: 50%;
}
}

`;
