import React from 'react';
import styled from 'styled-components';
import img8 from '../../assets/images/11.png';
import img from '../../assets/images/12.png';
import img10 from '../../assets/images/10.png';
import img14 from '../../assets/images/14.png';
import img15 from '../../assets/images/15.png';
import img16 from '../../assets/images/16.png';


const PriceCards = () => {
    return (
        <PriceCardsContainer>
        
        <div className="flip-card-container ">
          <div className="flip-card grid1">
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                <img src={img15} alt="Brohm Lake" />
                <figcaption>Basic</figcaption>
              </figure>
        
              <ul>
                <li>Detail 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 4</li>
                <li>Detail 5</li>
              </ul>
            </div>
        
            <div className="card-back">
              <figure>
                <div className="img-bg"></div>
                <img src={img16} alt="Brohm Lake" />
              </figure>
        
              <button>Book</button>
        
              <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
              </div>
            </div>
        
          </div>
        </div>
        
        <div className="flip-card-container" >
          <div className="flip-card grid2">
        
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                <img src={img8} alt="Image 2" />
                <figcaption>Popular</figcaption>
              </figure>
        
              <ul>
                <li>Detail 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 4</li>
                <li>Detail 5</li>
              </ul>
            </div>
        
            <div className="card-back">
              <figure>
                <div className="img-bg"></div>
                <img src={img} alt="image-2" />
              </figure>
        
              <button>Book</button>
        
              <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
              </div>
            </div>
        
          </div>
        </div>
      

        <div className="flip-card-container" >
          <div className="flip-card grid3">
        
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                <img src={img10} alt="Brohm Lake" />
                <figcaption>Advanced</figcaption>
              </figure>
        
              <ul>
                <li>Detail 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 4</li>
                <li>Detail 5</li>
              </ul>
            </div>
        
            <div className="card-back">
              
              <figure>
                <div className="img-bg"></div>
                <img src={img14} alt="Brohm Lake" />
              </figure>
        
              <button>Book</button>
        
              
              <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
              </div>
            </div>
        
          </div>
        </div>
        
        </PriceCardsContainer>
    )
}

export default PriceCards;

const PriceCardsContainer = styled.div`
    /* 
    ================================
        Best Viewed In Full Page
    ================================
*/

/* grid */

display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));



.grid1 {
    grid-column: 1 / 2;
}


.grid2 {
    grid-column: 2 / 3;
}

.grid3 {
    grid-column: 3 / 4;
}


/* .flip-card-container */
.flip-card-container {
  --hue: 150;
  --primary: hsl(var(--hue), 50%, 50%);
  --white-1: hsl(0, 0%, 90%);
  --white-2: hsl(0, 0%, 80%);
  --dark: hsl(var(--hue), 25%, 10%);
  --grey: hsl(0, 0%, 50%);

  width: 310px;
  height: 500px;
  margin-left: 2.5rem;

  perspective: 1000px;

  transform: scale(0.7, 0.7);
  -ms-transform: scale(0.7, 0.7); /* IE 9 */
  -webkit-transform: scale(0.7, 0.7); /* Safari and Chrome */
  -o-transform: scale(0.7, 0.7); /* Opera */
  -moz-transform: scale(0.7, 0.7); /* Firefox */
}

/* .flip-card */
.flip-card {
  width: inherit;
  height: inherit;

  position: relative;
  transform-style: preserve-3d;
  transition: .6s .1s;
}

/* hover and focus-within states */
.flip-card-container:hover .flip-card,
.flip-card-container:focus-within .flip-card {
  transform: rotateY(180deg);
}

/* .card-... */
.card-front,
.card-back {
  width: 100%;
  height: 100%;
  border-radius: 24px;

  background: var(--dark);
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  backface-visibility: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* .card-front */
.card-front {
  transform: rotateY(0deg);
  z-index: 2;
}

/* .card-back */
.card-back {
  transform: rotateY(180deg);
  z-index: 1;
}

/* figure */
figure {
  z-index: -1;
}

/* figure, .img-bg */
figure,
.img-bg {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
}

/* img */
img {
  height: 100%;
  border-radius: 24px;
}

/* figcaption */
figcaption {
  display: block;

  width: auto;
  margin-top: 12%;
  padding: 8px 22px;

  font-weight: bold;
  line-height: 1.6;
  letter-spacing: 2px;
  word-spacing: 6px;
  text-align: right;

  position: absolute;
  top: 0;
  right: 12px;

  color: var(--white-1);
  background: hsla(var(--hue), 25%, 10%, .5);
}

/* .img-bg */
.img-bg {
  background: hsla(var(--hue), 25%, 10%, .5);
}

.card-front .img-bg {
  clip-path: polygon(0 20%, 100% 40%, 100% 100%, 0 100%);
}

.card-front .img-bg::before {
  content: "";

  position: absolute;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(18deg);

  width: 100%;
  height: 6px;
  border: 1px solid var(--primary);
  border-left-color: transparent;
  border-right-color: transparent;

  transition: .1s;
}

.card-back .img-bg {
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
}

/* hover state */
.flip-card-container:hover .card-front .img-bg::before {
  width: 6px;
  border-left-color: var(--primary);
  border-right-color: var(--primary);
}

/* ul */
ul {
  padding-top: 50%;
  margin: 0 auto;
  width: 70%;
  height: 100%;

  list-style: none;
  color: var(--white-1);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* li */
li {
  width: 100%;
  margin-top: 12px;
  padding-bottom: 12px;

  font-size: 14px;
  text-align: center;

  position: relative;
}

li:nth-child(2n) {
  color: var(--white-2);
}

li:not(:last-child)::after {
  content: "";

  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 1px;

  background: currentColor;
  opacity: .2;
}

/* button */
button {
  font-family: inherit;
  font-weight: bold;
  color: var(--white-1);

  letter-spacing: 2px;

  padding: 9px 20px;
  border: 1px solid var(--grey);
  border-radius: 1000px;
  background: transparent;
  transition: .3s;

  cursor: pointer;
}

button:hover,
button:focus {
  color: var(--primary);
  background: hsla(var(--hue), 25%, 10%, .2);
  border-color: currentColor;
}

button:active {
  transform: translate(2px);
}

/* .design-container */
.design-container {
  --tr: 90;
  --op: .5;

  width: 100%;
  height: 100%;

  background: transparent;
  position: absolute;
  top: 0;
  left: 0;

  pointer-events: none;
}

/* .design */
.design {
  display: block;

  background: var(--grey);
  position: absolute;

  opacity: var(--op);
  transition: .3s;
}

.design--1,
.design--2,
.design--3,
.design--4 {
  width: 1px;
  height: 100%;
}

.design--1,
.design--2 {
  top: 0;
  transform: translateY(calc((var(--tr) - (var(--tr) * 2)) * 1%))
}

.design--1 {
  left: 20%;
}

.design--2 {
  left: 80%;
}

.design--3,
.design--4 {
  bottom: 0;
  transform: translateY(calc((var(--tr) + (var(--tr) - var(--tr))) * 1%))
}

.design--3 {
  left: 24%;
}

.design--4 {
  left: 76%;
}

.design--5,
.design--6,
.design--7,
.design--8 {
  width: 100%;
  height: 1px;
}

.design--5,
.design--6 {
  left: 0;
  transform: translateX(calc((var(--tr) - (var(--tr) * 2)) * 1%));
}

.design--5 {
  top: 41%;
}

.design--6 {
  top: 59%;
}

.design--7,
.design--8 {
  right: 0;
  transform: translateX(calc((var(--tr) + (var(--tr) - var(--tr))) * 1%))
}

.design--7 {
  top: 44%;
}

.design--8 {
  top: 56%;
}

/* states */
button:hover+.design-container,
button:active+.design-container,
button:focus+.design-container {
  --tr: 20;
  --op: .7;
}

.abs-site-link {
  position: fixed;
  bottom: 20px;
  left: 20px;
  color: hsla(0, 0%, 100%, .6);
  font-size: 16px;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
}
`;
