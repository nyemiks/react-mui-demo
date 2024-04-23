import React from 'react'
import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {

   // const [country, setCountry] = useState('')  // to select one only
   const [countries, setCountries] = useState<string[]>([])     // multiple select
    
    console.log("countries: " + countries)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      //  setCountry(event.target.value as string)
      const value = event.target.value;

      setCountries(typeof value === 'string' ? value.split(',') : value)

    }

  return (
    <Box width='250px'>
        <TextField label='Select Country' select 
        value={countries} onChange={handleChange} fullWidth
        SelectProps={{multiple: true}}
        size='small'
        color='secondary'
        helperText='Please select your country'
       
        >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}
