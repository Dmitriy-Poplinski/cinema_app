import {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import MomentUtils from '@date-io/moment'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

export const DatePicker: React.FunctionComponent = () => {
  const [selectedDate, setSelectedDate] = useState('2021-08-23')

  const handleDateChange = (date: any) => {
    const stringDate: string = date._d.toString().toLowerCase()
    const selectedDate: string = `${stringDate.substr(4, 3)}_${stringDate.substr(8, 2)}`
    setSelectedDate(selectedDate)
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}
