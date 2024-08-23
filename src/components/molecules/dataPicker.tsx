import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { TextField, Box, Typography } from "@mui/material";

const DatePickerComponentMui: React.FC = () => {
  const [singleDate, setSingleDate] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 2 }}>
        <Typography variant="h4">Date Picker Examples</Typography>

        <Box>
          <Typography variant="h6">Single Date Picker</Typography>
          <DatePicker
            label="Select a date"
            value={singleDate}
            onChange={(newValue) => setSingleDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
          <Typography variant="body1" sx={{ mt: 1 }}>
            Selected date: {singleDate ? singleDate.toDateString() : "None"}
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6">Date Range Picker</Typography>
          <DateRangePicker
            startText="Start date"
            endText="End date"
            value={dateRange}
            onChange={(newValue) => setDateRange(newValue)}
            renderInput={(startProps, endProps) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </>
            )}
          />
          <Typography variant="body1" sx={{ mt: 1 }}>
            Selected range:{" "}
            {dateRange[0] ? dateRange[0].toDateString() : "None"} to{" "}
            {dateRange[1] ? dateRange[1].toDateString() : "None"}
          </Typography>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default DatePickerComponentMui;
