import { useState } from 'react'
import { Stack, TextField, InputAdornment } from "@mui/material";

export const MuiTextField = () => {

  const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined'></TextField>
            <TextField label='Name' variant='filled'></TextField>
            <TextField label='Name' variant='standard'></TextField>
        </Stack>
        <Stack direction='row' spacing={2}>
           <TextField label='Small secondary' variant='outlined' 
           size='small' color='secondary'>            
           </TextField>
        </Stack>
        <Stack direction='row' spacing={2}>
           <TextField label='Form Input' required value={value} onChange={(e) => {setValue(e.target.value)}}
            error={!value} helperText={!value ? 'Required' : 'Do not share your password with anyone'}>            
           </TextField>
           <TextField label='Form Input' 
           type='password'
           disabled
           helperText='do not share your password with anyone'>            
           </TextField>
           <TextField label='Read only' InputProps={ {readOnly: true} }>            
           </TextField>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label="Amount"
            InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}}
            ></TextField>
            <TextField label="Weight"
            InputProps={{endAdornment: <InputAdornment position='end'>kg</InputAdornment>}}
            ></TextField>
        </Stack>
    </Stack>
  )
}
