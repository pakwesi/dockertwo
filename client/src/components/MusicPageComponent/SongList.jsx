import React, { useState, useEffect } from 'react';
import { gql, useQuery, useMutation,  ApolloClient,
    useApolloClient, useSubscription, useLazyQuery } from '@apollo/client';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import { Media, Player, controls } from 'react-media-player';
import CustomPlayPause from './CustomPlayPause';
import { Row, Col, Card,  Avatar} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const {
  PlayPause,
  CurrentTime,
  Progress,
  SeekBar,
  Duration,
  MuteUnmute,
  Volume,
  Fullscreen,
} = controls;



const { Meta } = Card;

const image = 'http://localhost:8000'

const ALL_SONGS = gql`
query{
	musicinfos{
    id
    name
    decrib
  }
  audioimages{
    id
    file
  }
  audios{
    id
    file
  }
}
`

const SongList = () => {
    const { data, loading, error } = useQuery(ALL_SONGS,
      );

    if (loading) return <p>loading...</p>;
    if (error) return <p>ERROR: {error.message}</p>;
    if (data === undefined) return <p>ERROR</p>;
    
    const detailsData = data.musicinfos;
    const detailsImage = data.audioimages;
    const detailsMusic = data.audios;
    
    

    const url = `http://localhost:8000`
    
    return (
      <>
      <MusicCardContainer>
      <div className="musiccard">
        <div className='container'>
        <Row gutter={[24, 24]}>
        {Object.entries(detailsData).map(
          ([key, item], i) => (
            <Col xs={20} sm={16} md={12} lg={8} xl={8} >
            <Media>
                  <div className="media">
                    <div className="media-player">
                      <Player onDuration src={"http://188.166.32.125:8000/graphql/media/" + detailsMusic[i].file} />
                    </div>
                    <div className="media-controls">
                    
                    

            <Card
            className="card-item"
            style={{ width: 300 }}
            cover={
              <div classname="card-image">
              <img key={i} src={"http://188.166.32.125:8000/graphql/media/" + detailsImage[i].file} alt={detailsImage[i].file} />
              </div>
            }
            actions={[
              <CustomPlayPause />,
              <MuteUnmute />,
              <CurrentTime />,
            ]}
          >
          <SeekBar />
          <Volume />
            <Meta
              title={item.name}
              description={item.decrib}
            />
          </Card>
          </div>
                  </div>
                </Media>
            </Col>
         )
         )}
        </Row>
        </div> 
      </div>
      </MusicCardContainer>
   
      </>
    );
}

export default SongList;

const MusicCardContainer = styled.section`
  margin: 3rem;

  img {
    width: 100%;
    height: 260px;
    display: inline-block;
    position: relative;
    overflow:hidden;
    max-width: 100%;
    max-height:100%;
    margin: auto;
    object-fit:cover;
  }
`;

