import React from "react";
import { createContext } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const DateTimePickerContext = createContext();

export function DateTimePickerProvider(props) {
  let [dateValue, setDateValue] = React.useState(dayjs());

  return (
    <DateTimePickerContext.Provider value={[dateValue, setDateValue]}>
      {props.children}
    </DateTimePickerContext.Provider>
  );
}