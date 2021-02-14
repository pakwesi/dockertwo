import React from 'react';
import styled from 'styled-components';

const TextAniSection = () => {
    return (
        <TextAniSectionContainer>
        <section className="section-title" id="section-title">

          <div className="container">
              <h2 className="title">Look for the Creative Studio</h2>
              <div className="buttons">
                  <button className="effects">
                      <p>How?</p>
                  </button>
              </div>
          </div>

      </section>
        </TextAniSectionContainer>
    )
}

export default TextAniSection;

const TextAniSectionContainer = styled.div`
    @import url("https://fonts.googleapis.com/css?family=Viga&display=swap");


.section-title {
  background: white;
  width: 100%;

  cursor:default;
}
.section-title .title {
  font-size: 90px;
  font-family: "Viga", sans-serif;
  color: black;
  text-align: center;
  padding-top: 6%;
  font-weight: bold;
  letter-spacing: -0.05em;
  margin: 30px auto 0;
}
.section-title .buttons {
  text-align: center;
  padding-top: 0;
}
.section-title .buttons a {
  color: #000;
}
.section-title .buttons .effects {
  width: 150px;
  height: 50px;
  background-color: transparent;
  margin: 20px;
  color: #5d5d5a;
  position: relative;
  overflow: hidden;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 0;
}
.section-title .buttons .effects:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #000000;
  transition: all 0.3s 0.2s ease;
  left: 0;
  top: 0;
}
.section-title .buttons .effects:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #000000;
  transition: all 0.3s ease;
  right: 0;
  bottom: 0;
}
.section-title .buttons .effects p {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  z-index: 1;
}
.section-title .buttons .effects p:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 0;
  background-color: #000000;
  transition: all 0.3s 0.4s ease;
  right: 0;
  top: 0;
}
.section-title .buttons .effects p:after {
  content: "";
  position: absolute;
  width: 2px;
  height: 0;
  background-color: #000000;
  transition: all 0.3s ease;
  left: 0;
  bottom: 0;
}
.section-title .buttons .effects:hover {
  color: #000000;
  letter-spacing: 2px;
}
.section-title .buttons .effects:hover:before, .section-title .buttons .effects:hover:after {
  width: 100%;
}
.section-title .buttons .effects:hover p {
  z-index: 1;
}
.section-title .buttons .effects:hover p:before, .section-title .buttons .effects:hover p:after {
  height: 100%;
}
.section-title .buttons .effects:hover span {
  height: 100%;
  top: 0;
}
.section-title .buttons button:active {
  outline: none;
  border: none;
}
.section-title .buttons button:focus {
  outline: 0;
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
.section-title .title {
  font-size: 1.5rem;
  font-family: "Viga", sans-serif;
  color: black;
  text-align: center;
  padding-top: 6%;
  font-weight: bold;
  letter-spacing: -0.05em;
  margin: 1.5rem auto 0;
}
}

/* iPhone 6, 7, 8 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */

}

@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.section-title .title {
  font-size: 1.5rem;
  font-family: "Viga", sans-serif;
  color: black;
  text-align: center;
  padding-top: 6%;
  font-weight: bold;
  letter-spacing: -0.05em;
  margin: 1.5rem auto 0;
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
.section-title .title {
  font-size: 1.5rem;
  font-family: "Viga", sans-serif;
  color: black;
  text-align: center;
  padding-top: 6%;
  font-weight: bold;
  letter-spacing: -0.05em;
  margin: 1.5rem auto 0;
}
}

/* iPhone XS Max, XR ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */

}

@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.section-title .title {
  font-size: 1.5rem;
  font-family: "Viga", sans-serif;
  color: black;
  text-align: center;
  padding-top: 6%;
  font-weight: bold;
  letter-spacing: -0.05em;
  margin: 1.5rem auto 0;
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
.section-title .title {
  font-size: 1.5rem;
  font-family: "Viga", sans-serif;
  color: black;
  text-align: center;
  padding-top: 6%;
  font-weight: bold;
  letter-spacing: -0.05em;
  margin: 1.5rem auto 0;
}
}
`;
