import React, { createContext, useContext, useState } from "react";

// Create a context to store  data
const DataContext = createContext();

// Custom hook to access  data context
export const useData = () => useContext(DataContext);

// Input data provider component
export const DataProvider = ({ children }) => {
  const initialData = {
    name: "",
    email: "",
    phoneNumber: "",
    selectedPlan: [],
    monthlyOrYearly: "monthly",
    pickOns: [false, false, false],
    visitedPage: ["PersonalInfo"],
  };
  const [data, setData] = useState(initialData);

  // Function to store input data for a specific screen
  const updateState = (key, value, type = "obj") => {
    if (key === "visitedPage") {
      setData((prevData) => ({
        ...prevData,
        [key]: [...prevData[key], value],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    }
  };

  return (
    <DataContext.Provider value={{ data, updateState }}>
      {children}
    </DataContext.Provider>
  );
};
