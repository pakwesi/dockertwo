import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation,  ApolloClient,
    useApolloClient } from '@apollo/client';
import { useHistory } from "react-router-dom";

import SongPage from '../../components/MusicPageComponent/SongPage';
import SongList from '../../components/MusicPageComponent/SongList';
import MusicCarousel from '../../components/MusicPageComponent/MusicCarousel';


    
const MusicPage = () => {

    return (
      <>
      <SongList />
      </>
    )
}

export default MusicPage;

