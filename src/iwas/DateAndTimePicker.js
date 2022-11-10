import * as React from "react";
import dayjs from "dayjs";
import { DateTimePickerContext } from "../context/DateTimePickerContext";
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
          disablePast
          InputProps={{ sx:{ "& .MuiSvgIcon-root": { color: "#1565c0" } } }}
          inputFormat="DD/MM/YY HH:mm"
          renderInput={(params) => (
            <TextField
              disabled
              sx={{ backgroundColor: "white", width: "100%", mt: 1 }}
              {...params}
            />
          )}
          value={dateValue}
          onChange={(newValue) => {
            setDateValue(newValue);
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
}
