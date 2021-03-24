import React, { useState, useContext } from "react";
import { RoomContext } from "../Components/RoomContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Filter from "../Components/Filter";
import { BiSliderAlt } from "react-icons/bi";

export const Rooms = () => {
  const context = useContext(RoomContext);
  const { filtered } = context.rooms;
  const [isOpen, setOpen] = useState(false);

  const toggleFilter = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {filtered.length > 0 ? (
        <>
          <RoomHeader>
            <h3>Rooms Available</h3>
            <FilterButton>
              <BiSliderAlt size={30} onClick={toggleFilter} />
            </FilterButton>
          </RoomHeader>
          <RoomDisplay>
            <Filter isOpen={isOpen} toggleFilter={toggleFilter} />
          </RoomDisplay>
          <RoomContainer>
            {filtered.map((room) => {
              return (
                <Link
                  to={`/stay/${room.fields.type}/${room.fields.slug}`}
                  key={room.sys.id}
                >
                  <RoomCard>
                    <img
                      src={room.fields.images[0].fields.file.url}
                      alt="room"
                    />
                    <RoomDetail>
                      <h3>{room.fields.name}</h3>
                      <h2>${room.fields.price}</h2>
                    </RoomDetail>
                  </RoomCard>
                </Link>
              );
            })}
          </RoomContainer>
        </>
      ) : (
        <Empty>No Rooms Available</Empty>
      )}
    </>
  );
};

const RoomContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-self: center;
  grid-gap: 10px;
  margin-top: 40px;
  a {
    text-decoration: none;
    color: #000;
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 0px;
    transition: 0.3s ease;
    margin: 0 auto;
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    max-width: 60%;
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    max-width: 50%;
  }
`;
const RoomCard = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  background: ${({ theme }) => theme.colors.primary};
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const RoomDetail = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;

  h3 {
    font-size: ${({ theme }) => theme.sizes.h3};
    text-align: center;
    margin-bottom: 10px;
  }
  h2 {
    font-size: ${({ theme }) => theme.sizes.h2};
    color: #fff;
  }
`;
const Empty = styled.div`
  width: 100%;
  height: 10vh;
  background: orangered;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    margin-top: 0px;
  }
`;

const RoomHeader = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    max-width: 75%;
    margin: 0 auto;
    margin-top: 30px;
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    max-width: 55%;
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    max-width: 45%;
  }
`;
const RoomDisplay = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;

  @media (min-width: ${({ theme }) => theme.media.md}) {
    grid-template-columns: 25% 75%;
  }
`;
const FilterButton = styled.div`
  cursor: pointer;
`;
