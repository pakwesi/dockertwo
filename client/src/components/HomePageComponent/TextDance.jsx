import React from 'react';
import styled from 'styled-components'

const TextDance = () => {
    return (
        <TextDanceContainer>
        <div className="planet-holder">
        <div className="planet">
            <div className="cloud"></div>
            <div className="cloud"></div>
            <div className="cloud"></div>
            <div className="cloud"></div>
            <div className="cloud"></div>
            <div className="cloud"></div>
        </div>

        <div className="outer">
            <div className="outerClouds"></div>
            <div className="outerClouds"></div>
            <div className="outerClouds"></div>
            <div className="outerClouds"></div>
            <div className="outerClouds"></div>
            <div className="outerClouds"></div>
            <div className="outerClouds"></div>
        </div>

        <div className="text">OPEN SOURCE PROJECT</div>
        </div>
        </TextDanceContainer>
    )
}

export default TextDance;

const TextDanceContainer = styled.div`

@import url("https://fonts.googleapis.com/css2?family=Exo&display=swap");



  

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Exo", sans-serif;


.planet-holder {
  position: relative;
  padding: 113px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: scale(0);
  animation: planetScale 0.5s cubic-bezier(0.64, 0.57, 0.67, 1.53) forwards;

  @keyframes planetScale {
    to {
      transform: scale(1);
    }
  }

  .outer {
    position: absolute;
    height: 100%;
    width: 100%;

    .outerClouds:nth-child(1) {
      position: absolute;
      width: 134px;
      height: 31px;
      background: #b50086;
      border-radius: 16px;
      left: 8%;
      top: 52%;
      transform: rotate(-20deg) translate(-150%);
      animation: outerClouds 5s linear infinite 0.5s;
    }

    .outerClouds:nth-child(2) {
      position: absolute;
      width: 35px;
      height: 35px;
      background: #b50086;
      border-radius: 100px;
      left: 23%;
      top: 72%;
      transform: rotate(-20deg) translate(-150%);
      animation: outerClouds2 10s linear infinite 0.5s;
    }

    .outerClouds:nth-child(3) {
      position: absolute;
      width: 178px;
      height: 27px;
      background: #efe933;
      border-radius: 16px;
      left: 24%;
      top: 2%;
      transform: rotate(-20deg) translate(-150%);
      animation: outerClouds 6s linear infinite 1.2s;
    }

    .outerClouds:nth-child(4) {
      position: absolute;
      width: 35px;
      height: 35px;
      background: #efe933;
      border-radius: 100px;
      left: 81%;
      top: 55%;
      transform: rotate(-20deg) translate(-150%);
      animation: outerClouds2 9s linear infinite 0.8s;
    }

    .outerClouds:nth-child(5) {
      position: absolute;
      width: 135px;
      height: 45px;
      background: #9a5edc;
      border-radius: 100px;
      left: 42%;
      top: 84%;
      transform: rotate(-20deg) translate(-150%);
      animation: outerClouds 4s linear infinite 0.6s;
    }

    .outerClouds:nth-child(6) {
      position: absolute;
      width: 135px;
      height: 45px;
      background: #3fe279;
      border-radius: 100px;
      left: 12%;
      top: 29%;
      transform: rotate(-20deg) translate(-150%);
      animation: outerClouds 7s linear infinite 1.2s;
    }

    .outerClouds:nth-child(7) {
      position: absolute;
      width: 25px;
      height: 25px;
      background: #efe933;
      border-radius: 100px;
      left: 49%;
      top: 10%;
      transform: rotate(-20deg) translate(-150%);
      animation: outerClouds2 7s linear infinite 1.1s;
    }

    @keyframes outerClouds {
      from {
        transform: rotate(-20deg) translate(-150%);
      }

      to {
        transform: rotate(-20deg) translate(400px);
      }
    }

    @keyframes outerClouds2 {
      0% {
        transform: rotate(-20deg) translate(-150%);
      }

      50% {
        transform: rotate(-20deg) translate(110%);
      }

      100% {
        transform: rotate(-20deg) translate(-150%);
      }
    }
  }

  .planet {
    position: relative;
    width: 200px;
    height: 200px;
    background: rgb(221, 0, 141);
    background: linear-gradient(
      345deg,
      rgba(221, 0, 141, 1) 0%,
      rgba(87, 87, 221, 1) 87%
    );
    border-radius: 100%;
    overflow: hidden;

    & .cloud:nth-child(1) {
      position: absolute;
      width: 120px;
      height: 39px;
      background: #56bbbb;
      border-radius: 21px;
      top: 46%;
      left: 41%;
      transform: rotate(-20deg) translate(-150%);
      animation: innerClouds 7s linear infinite;
    }

    & .cloud:nth-child(2) {
      position: absolute;
      width: 28px;
      height: 28px;
      background: #ff64e5;
      border-radius: 16px;
      top: 3%;
      left: 31%;
      transform: rotate(-20deg) translate(-180%);
      animation: innerClouds2 5s linear infinite;
    }

    & .cloud:nth-child(3) {
      position: absolute;
      width: 148px;
      height: 17px;
      background: #ff64e5;
      border-radius: 16px;
      top: 80%;
      left: 27%;
      transform: rotate(-20deg) translate(-150%);
      animation: innerClouds 8s linear infinite 2s;
    }

    & .cloud:nth-child(4) {
      position: absolute;
      width: 148px;
      height: 17px;
      background: #56bbbb;
      border-radius: 16px;
      left: 8%;
      top: 16%;
      transform: rotate(-20deg) translate(-150%);
      animation: innerClouds 8s linear infinite 1s;
    }

    & .cloud:nth-child(5) {
      position: absolute;
      width: 35px;
      height: 35px;
      background: #18e08d;
      border-radius: 100%;
      top: 53%;
      left: 60%;
      transform: rotate(-20deg) translate(-150%);
      animation: innerClouds2 8s linear infinite;
    }

    & .cloud:nth-child(6) {
      left: 22%;
      position: absolute;
      width: 148px;
      height: 25px;
      background: #18e08d;
      border-radius: 16px;
      top: 31%;
      transform: rotate(-20deg) translate(-150%);
      animation: innerClouds 7s linear infinite 4s;
    }

    @keyframes innerClouds {
      from {
        transform: rotate(-20deg) translate(-150%);
      }

      to {
        transform: rotate(-20deg) translate(110%);
      }
    }

    @keyframes innerClouds2 {
      0% {
        transform: rotate(-20deg) translate(-150%);
      }

      50% {
        transform: rotate(-20deg) translate(110%);
      }

      100% {
        transform: rotate(-20deg) translate(-150%);
      }
    }
  }

  .text {
    color: black;
    border-top: 4px solid black;
    border-bottom: 4px solid black;
    text-align: center;
    padding: 15px 0;
    padding-top: 15px;
    padding-right: 0px;
    padding-bottom: 15px;
    padding-left: 0px;
    font-size: 25px;
    width: 290px;
    position: absolute;
    transform: rotate(25deg) scale(0);
    animation: titleAnim 0.5s cubic-bezier(0.24, 0.97, 0.37, 1.53) forwards 0.5s;
  }
  @keyframes titleAnim {
    0% {
      transform: rotate(25deg) scale(0);
    }
    45% {
      transform: rotate(-5deg) scale(1);
    }

    85% {
      transform: rotate(5deg) scale(1);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
  }
}

`;