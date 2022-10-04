import * as React from "react";
import dayjs from "dayjs";
import { DateTimePickerContext } from "../Context/DateTimePickerContext";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Stack from "@mui/material/Stack";

export default function DateAndTimePicker() {
  const [dateValue, setDateValue] = React.useContext(DateTimePickerContext);

  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DateTimePicker
        InputProps={{sx: {"& .MuiSvgIcon-root": {color: "#1565c0"}}}}
          inputFormat="DD/MM/YY HH:mm"
          renderInput={(params) => (
            <TextField
              sx={{ backgroundColor: "white", width: 400, mt:1 }}
              {...params}
            />
          )}
          value={dateValue}
          onChange={(newValue) => {
            setDateValue(newValue);
          }}
          minDateTime={dayjs("2022-04-02T12:00")}
        />
      </Stack>
    </LocalizationProvider>
  );
}
