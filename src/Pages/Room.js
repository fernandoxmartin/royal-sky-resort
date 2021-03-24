import React, { useEffect, useState } from "react";
import { getRoom } from "../Contentful";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Room = () => {
  const [params] = useState(useParams());
  const [room, setRoom] = useState(null);

  useEffect(() => {
    getRoom(params.slug).then((res) => {
      setRoom(res[0].fields);
    });
  }, [params.slug]);

  console.log(room);

  return (
    <>
      {room && (
        <RoomContainer>
          <RoomImage>
            <img src={room.images[0].fields.file.url} alt="resort room" />
          </RoomImage>
          <RoomDetailContainer>
            <RoomDetail>
              <h1>{room.name}</h1>
              <p>{room.description}</p>
              <h3>${room.price}</h3>
              <h3>{room.size} sq ft</h3>
            </RoomDetail>
          </RoomDetailContainer>
        </RoomContainer>
      )}
    </>
  );
};

export default Room;

const RoomContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 50% 50%;
  align-items: center;
  background: ${({ theme }) => theme.colors.alternate};

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    grid-template-rows: none;
    display: flex;
    height: 50vh;
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    height: 50vh;
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    height: 60vh;
    margin-bottom: 70px;
  }
`;
const RoomImage = styled.div`
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const RoomDetailContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    width: 70%;
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    width: 35%;
  }
`;
const RoomDetail = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;
