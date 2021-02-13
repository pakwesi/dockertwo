import React, { useState, useCallback  } from 'react';
import { gql, useQuery, useMutation,  ApolloClient,
    useApolloClient } from '@apollo/client';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const CREATE_SONG = gql`
  mutation($file: Upload){
  uploadMusic(file:$file){
    song{
      id
      file
    }
  }
}
`;

const CREATE_SONGIMAGE = gql`
mutation($file: Upload){
  uploadImages(file:$file){
    image{
      id
      file
    }
  }
}

`;

const CREATE_SONGINFO = gql`
mutation($name: String, $decrib:String){
  songInformation(name:$name, decrib:$decrib){
    info{
      id
      name
      decrib
    }
  }
}
`;


const SongPage = () => {
    const [name, setName] = useState('')
    const [decrib, setDecrib] = useState('')

    let history = useHistory();

    const [mutateaudio] = useCallback(
      useMutation(CREATE_SONG),
      []
    );

    const [mutateimage] = useCallback(
      useMutation(CREATE_SONGIMAGE),
      []
    );


    const [mutateinfo] = useMutation(CREATE_SONGINFO, {
      context: { hasUpload: true },
    })


    const submit = (event) => {
      event.preventDefault()
  
      mutateinfo({  variables: { name, decrib } })
  
      setName('')
      setDecrib('')
      history.push("/music");
    }

    

    return (
      <SongUpContainer>
      <div class="parent">
      <div class="left-wrap">
        <div class="left">
        <div class="heading">SHARE</div>
        <div class="site-title">Share Your Files.</div>
        <div class="site-slogan">Secure. Safe. Free.</div>
      </div>
      </div>
      
      <div class="right">
        <div class="file-selected-area">
          <div class="file-name">Upload Music</div>
          <div class="file-action">
            <button class="remove-file-button">X</button>
            <hr />
            
          </div>
        </div>
        <div class="upload-form">
          <form action=""  encType={'multipart/form-data'}>
            <div class="form-upload-area">
              <div class="form-upload-area-content-area">
               <span class="dotted-box"></span>
              <span class="form-upload-area-content-area-content">Drag and drop your files here.</span>
              </div>
              <input type="file" accept=".mp3, .aac, .wav .flac, .alac, .dsd "  
              onChange={({
                target: {
                  validity,
                  files: [file]
                }
              }) => validity.valid && mutateaudio({ variables: { file } })}
              class="upload-button" />
            </div>
            <div class="form-info-area">
              <label for="reciver">Send To</label>
              <br />
              <input type="file" accept=".png, .jpg, .jpeg"  
              required
              onChange={({
                target: {
                  validity,
                  files: [file]
                }
              }) => validity.valid && mutateimage({ variables: { file } })}
              id="reciver" />
               <label for="from">From</label>
              <br />
              <input type="text"  
              required
              onChange={({ target }) => setName(target.value)} id="from" placeholder="Your song title" />
              <br />
              <input type="text"  
              required
              onChange={({ target }) => setDecrib(target.value)} id="from" placeholder="Your song description" />
              <br />
              <button type="submit" class="submit-button"
              onClick={submit}
              >
              Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </SongUpContainer>

    )
}

export default SongPage;

const SongUpContainer = styled.section`
  @import "https://fonts.googleapis.com/css?family=Open+Sans:300,400,800";
body{
  box-sizing: border-box;
  margin: 0;
  padding: 0; 
}

.parent{
  background:rgb(25,79,244);
  height:100vh;
  padding:0;
  margin:0;
  display:flex;
  justify-content:space-around;
  align-items:center;
  color:white;
  font-family: 'Open Sans', sans-serif;
  position:rtelative;
  transition: all .5s ease;
}
.left{
  align-content:center;
  transition: all .5s ease;
 
}
.heading{
  font-size:45px;
  font-weight:1000;
  letter-spacing:.1rem;
  margin-bottom:.1rem
}

.site-title{
  font-size:35px;
  color: rgba(255, 255, 255, 0.8);  
}

.site-slogan{
  font-size:22px;
  color: rgba(255, 255, 255, 0.6)
}
.right{
  background:white;
  border-radius:5px;
  overflow:hidden;
  transition: all 10s ease;
}
.upload-form{
  height:auto;
  width:300px;
}

@media (max-width: 600px) {
  .parent {
    flex-direction:column;
    transition: all .5s ease;
  }
  .left{
    margin-bottom:30px;
  }
}

 .form-upload-area{
  height:90px;
  background:rgb(245	,244	,255	,0.9);
  position:relative;
  color: #96a3bb;
  text-align:center;
}

.upload-button{
  height:100%;
  width:100%;
  opacity:0;
}
.dotted-box{
  height:30px;
  width:70px;
  border:1px dashed #96a3bb;
 position:absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); 
}

.form-upload-area-content-area-content{
  position:absolute;
  bottom:5px;
  right:0;
  left:0;
  font-size:12px;
  
}

.form-info-area{
 color:#96a3bb;
  padding:10px;
  text-transform:uppercase;  
  
}

input[type=text]{
 border: 1px solid #e0e0e0;
  width:90%;
  padding:7px;
  color:#96a3bb;
}

.form-info-area label{
  font-size:11px;
}

.form-info-area textarea{
  border: 1px solid #e0e0e0;
  padding:7px;
  width:100%;
  border-radius:5px;
  color:#96a3bb;
  width:90%;
}

.submit-button{
  margin-top:14px;
  border: 1px solid #e0e0e0;
  padding:10px;
  width:100%;
  border-radius:5px;
  color:white;
  background:rgba(25,79,244	);
  cursor-type:poiner;
  font-weight:1000;
  cursor: pointer;
}

.file-selected-area{
  color:black;
  position:relative;
  padding:10px;
}
.file-name{
  
}
.remove-file-button{
 background:white;
  border:none;
  position:absolute;
  right:10px;
  top:10px;
    font-size:15px;
  cursor: pointer;
}

`;