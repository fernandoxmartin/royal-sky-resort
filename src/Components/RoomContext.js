import React, { useState, useEffect, createContext } from "react";
import { getRooms } from "../Contentful";

export const RoomContext = createContext();

export const RoomProvider = (props) => {
  const [filters, setFilters] = useState({
    startDate: new Date(),
    endDate: new Date(),
    guest: 1,
    value: [200, 500],
    type: "",
    bed: "",
    view: "",
  });
  const [rooms, setRooms] = useState({
    rooms: [],
    filtered: [],
  });

  useEffect(() => {
    getRooms().then((res) => {
      setRooms({
        rooms: res,
        filtered: filterRooms(),
      });
    });
  }, [filters]);

  const increment = () => {
    if (filters.guest >= 4) {
      return;
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        guest: filters.guest + 1,
      }));
    }
  };

  const decrement = () => {
    if (filters.guest <= 1) {
      return;
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        guest: filters.guest - 1,
      }));
    }
  };

  const toggleSelection = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.name]: e.id,
    }));
  };

  const filterRooms = () => {
    let filtered_rooms = rooms.rooms
      .filter((rooms) => {
        if (parseInt(filters.guest) === 1) {
          return rooms.fields.capacity === 2;
        } else if (parseInt(filters.guest) <= 2) {
          return rooms;
        } else {
          return rooms.fields.capacity === 4;
        }
      })
      .filter((rooms) => {
        if (!filters.type) {
          return rooms;
        } else {
          return rooms.fields.type === filters.type;
        }
      })
      .filter((rooms) => {
        if (!filters.view) {
          return rooms;
        } else {
          return rooms.fields.view === filters.view;
        }
      })
      .filter((rooms) => {
        if (!filters.bed) {
          return rooms;
        } else {
          return rooms.fields.bed === filters.bed;
        }
      })
      .filter((rooms) => {
        if (filters.value) {
          return (
            rooms.fields.price >= filters.value[0] &&
            rooms.fields.price <= filters.value[1]
          );
        } else {
          return rooms;
        }
      });

    filtered_rooms.sort((a, b) => (a.fields.price > b.fields.price ? 1 : -1));

    setRooms((prevRooms) => ({
      ...prevRooms,
      filtered: filtered_rooms,
    }));

    return filtered_rooms;
  };

  return (
    <RoomContext.Provider
      value={{
        filters,
        resetDefaultFilters: () => {
          setFilters((prevFilters) => ({
            ...prevFilters,
            value: [200, 500],
            type: "",
            bed: "",
            view: "",
          }));
        },
        rooms,
        increment,
        decrement,
        filterRooms,
        toggleSelection,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};
