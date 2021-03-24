import React, { useContext, useState, useRef } from "react";
import { RoomContext } from "./RoomContext";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const Range = Slider.createSliderWithTooltip(Slider.Range);

const Filter = ({ isOpen, toggleFilter }) => {
  const context = useContext(RoomContext);
  const [selected, setSelected] = useState("");
  const {
    filters,
    resetDefaultFilters,
    toggleSelection,
    filterRooms,
  } = context;

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();

  const resetFilters = () => {
    resetDefaultFilters();

    ref1.current.checked = false;
    ref2.current.checked = false;
    ref3.current.checked = false;
    ref4.current.checked = false;
    ref5.current.checked = false;
    ref6.current.checked = false;
    ref7.current.checked = false;
  };

  return (
    <FilterContainer open={isOpen}>
      <CloseFilter open={isOpen}>
        <VscChromeClose size={30} onClick={toggleFilter} color={"#555"} />
      </CloseFilter>
      <FilterCategories>
        <Categorie>
          <h3>Price</h3>
          <PriceSliders>
            <Range
              // onChange={(value) => {
              //   setFilters({ ...filters, value: value });
              // }}
              value={filters.value}
              min={200}
              max={500}
              tipFormatter={(value) => `${value}`}
              step={50}
              dots={true}
            />
          </PriceSliders>
        </Categorie>
        <Categorie>
          <h3>Type</h3>
          <Selector>
            <Selection
              ref={ref1}
              type="radio"
              name="type"
              id="room"
              onClick={(e) => toggleSelection(e.target)}
            />
            <SelectionLabel htmlFor="room">room</SelectionLabel>
            <Selection
              ref={ref2}
              type="radio"
              name="type"
              id="suite"
              onClick={(e) => toggleSelection(e.target)}
            />
            <SelectionLabel htmlFor="suite">suite</SelectionLabel>
            <Selection
              ref={ref7}
              type="radio"
              name="type"
              id="deluxe"
              onClick={(e) => toggleSelection(e.target)}
            />
            <SelectionLabel htmlFor="deluxe">deluxe</SelectionLabel>
          </Selector>
        </Categorie>
        <Categorie>
          <h3>View</h3>
          <Selector>
            <Selection
              ref={ref3}
              type="radio"
              name="view"
              id="ocean"
              onClick={(e) => toggleSelection(e.target)}
            />
            <SelectionLabel htmlFor="ocean">ocean</SelectionLabel>
            <Selection
              ref={ref4}
              type="radio"
              name="view"
              id="resort"
              onClick={(e) => toggleSelection(e.target)}
            />
            <SelectionLabel htmlFor="resort">resort</SelectionLabel>
          </Selector>
        </Categorie>
        <Categorie>
          <h3>Bed</h3>
          <Selector>
            <Selection
              ref={ref5}
              type="radio"
              name="bed"
              id="king"
              onClick={(e) => toggleSelection(e.target)}
            />
            <SelectionLabel htmlFor="king">king</SelectionLabel>
            <Selection
              ref={ref6}
              type="radio"
              name="bed"
              id="queen"
              onClick={(e) => toggleSelection(e.target)}
            />
            <SelectionLabel htmlFor="queen">queen</SelectionLabel>
          </Selector>
        </Categorie>
        <Divider />
        <Categorie>
          <Reset onClick={resetFilters}>Reset</Reset>
        </Categorie>
      </FilterCategories>
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div`
  height: 70%;
  width: 90%;
  background: ${({ theme }) => theme.colors.alternate};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "all" : "none")};
  transition: 0.3s all;
  border-radius: 5px;
  box-shadow: 0px 0px 20px #000;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    opacity: 1;
    position: initial;
    transform: translate(0%, 0%);
    width: 100%;
    max-height: ${({ open }) => (open ? "40vh" : "0")};
    box-shadow: none;
    margin-bottom: ${({ open }) => (open ? "20px" : "0")};
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    max-width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    max-width: 60%;
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    max-width: 50%;
  }
`;

const FilterCategories = styled.div`
  width: 90%;
  height: 70vh;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    max-width: 80%;
    height: 30vh;
  }
`;
const PriceSliders = styled.div`
  width: 95%;
  margin-top: 10px;
  .input-range {
    width: 80%;
    margin: 0 auto;
  }
`;
const Categorie = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    &:last-child {
      width: 100%;
      display: grid;
      grid-column: 1 / 3;
    }
  }

  h3 {
    width: 100%;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 0.8rem;
    @media (min-width: ${({ theme }) => theme.media.sm}) {
      font-size: 15px;
    }
  }
`;
const Selector = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;
`;

const SelectionLabel = styled.label`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dbd9ce;
  text-transform: uppercase;
  font-family: sans-serif, Arial;
  font-weight: 600;
  font-size: 0.8rem;
  border: none;
  border-radius: 4px;
  transition: 0.3s ease;
  margin: 10px 0px 10px 0px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;
const Selection = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
  &:checked + ${SelectionLabel} {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    height: 35px;
  }
`;
const Divider = styled.div`
  height: 15px;
  width: 90%;
  border-bottom: 2px solid #aaa;
  margin-bottom: 20px;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    display: none;
  }
`;
const CloseFilter = styled.div`
  align-self: flex-end;
  margin: 20px 20px 10px 0px;
  cursor: pointer;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;
const Reset = styled.button`
  width: 100%;
  height: 40px;
  background: #dbd9ce;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-family: sans-serif, Arial;
  font-weight: 600;
  font-size: 0.8rem;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    width: 300px;
  }
`;
