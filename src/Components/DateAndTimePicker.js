import * as React from 'react';
import dayjs from 'dayjs';
import AlarmIcon from '@mui/icons-material/Alarm';
import SnoozeIcon from '@mui/icons-material/Snooze';
import { DateTimePickerContext } from '../Context/DateTimePickerContext';
import TextField from '@mui/material/TextField';
import ClockIcon from '@mui/icons-material/AccessTime';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

export default function DateAndTimePicker() {
  const [dateValue, setDateValue] = React.useContext(DateTimePickerContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DateTimePicker
        inputFormat='DD/MM/YY HH:mm'
          renderInput={(params) => <TextField {...params}  />}
          value={dateValue}
          onChange={(newValue) => {
            setDateValue(newValue);
          }}
          minDateTime={dayjs('2022-04-02T12:00')}
        />
        
      </Stack>
    </LocalizationProvider>
  );
}


// InputProps={{sx: {"& .MuiSvgIcon-root": {color: "#1565c0"}} }}
