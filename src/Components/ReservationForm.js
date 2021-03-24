import React, { useState, useContext, useEffect, forwardRef } from "react";
import { RoomContext } from "./RoomContext";
import styled from "styled-components";
import { BsCalendar } from "react-icons/bs";
import { BiUser, BiRightArrowAlt } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

export const ReservationForm = () => {
  const context = useContext(RoomContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();
  const { guest } = context.filters;
  const { increment, decrement, filterRooms } = context;
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    filterRooms();
    history.push("/reserve/rooms");
  };

  const ref = React.createRef();

  const MyContainer = ({ className, children }) => {
    return (
      <div
        style={{
          padding: "16px",
          background: "#F5BD02",
          color: "#fff",
          borderRadius: "5px",
        }}
      >
        <CalendarContainer className={className}>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };
  const DateInput = forwardRef(({ onClick, date }, _ref) => {
    return (
      <DateContainer>
        <DateButton onClick={onClick}>
          <DateTop>
            <h3>{months[date.getMonth()]}</h3>
            <h3>{date.getFullYear()}</h3>
          </DateTop>
          <DateBottom>
            <h1>{date.getDate()}</h1>
          </DateBottom>
        </DateButton>
      </DateContainer>
    );
  });

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <FormSection>
          <BsCalendar size={20} color={"#000"} />
          {/* <label>Check In / Out</label> */}
          <InputContainer>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              calendarContainer={MyContainer}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              withPortal
              customInput={<DateInput ref={ref} date={startDate} />}
            />
            <CenterContainer>
              <BiRightArrowAlt size={20} />
            </CenterContainer>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              calendarContainer={MyContainer}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              withPortal
              customInput={<DateInput ref={ref} date={endDate} />}
            />
          </InputContainer>
        </FormSection>
        <FormSection>
          <BiUser size={20} color={"#000"} />
          {/* <label>Guests</label> */}
          <InputContainer>
            <GuestButton>
              <button type="button" onClick={decrement}>
                <FaMinus size={20} />
              </button>
            </GuestButton>
            <CenterContainer>
              <h1>{guest}</h1>
            </CenterContainer>
            <GuestButton>
              <button type="button" onClick={increment}>
                <GoPlus size={20} />
              </button>
            </GuestButton>
          </InputContainer>
        </FormSection>
        <FormSection>
          <FormButton type="submit">Check Availability</FormButton>
        </FormSection>
      </FormContainer>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    height: 25vh;
    margin-bottom: 50px;
  }
`;
const FormContainer = styled.form`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    flex-direction: row;
    justify-content: space-between;
    width: 700px;
  }
  @media (min-width: ${({ theme }) => theme.media.md}) {
    width: 800px;
  }
  @media (min-width: ${({ theme }) => theme.media.xl}) {
    width: 900px;
  }
`;
const InputContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.alternate};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
const FormButton = styled.button`
  height: 80px;
  width: 100%;
  background: ${({ theme }) => theme.colors.buttonSecondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.sizes.h2};
  color: ${({ theme }) => theme.colors.buttonText};
  text-transform: uppercase;
  letter-spacing: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  grid-row-start: 2;
`;
const CalendarContainer = styled.div``;
const FormSection = styled.div`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 20% 80%;
  align-items: center;
  label {
    font-weight: bolder;
    letter-spacing: 1px;
  }
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    margin-right: 10px;
  }
`;
const DateButton = styled.div`
  height: 100px;
  width: 100%;
  display: grid;
  grid-template-rows: 30% 70%;
  align-items: center;
  background: ${({ theme }) => theme.colors.alternate};
  border-radius: 5px;
  cursor: pointer;
  h1,
  h3 {
    font-family: "Bebas Neue";
  }
  h1 {
    font-size: 5rem;
  }
  h3 {
    letter-spacing: 1px;
    font-size: 15px;
  }
`;
const DateTop = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const DateBottom = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GuestButton = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  button {
    height: 100px;
    width: 100%;
    border: none;
    background: ${({ theme }) => theme.colors.alternate};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const CenterContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Bebas Neue";
    font-size: 5rem;
  }
`;
const DateContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.alternate};
  border-radius: 5px;
`;
