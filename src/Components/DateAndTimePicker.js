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

export default function DateAndTimePicker() {
  const [dateValue, setDateValue] = React.useContext(DateTimePickerContext);
  const [dateWithInitialValue, setDateWithInitialValue] = React.useState(
    dayjs('2019-01-01T18:54'),
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack sx={{width:300, backgroundColor: "white", mt: 1}} spacing={3}>
        <DateTimePicker
          value={dateValue}
          onChange={(newValue) => setDateValue(newValue)}
          renderInput={(params) => (
            <TextField {...params} />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
