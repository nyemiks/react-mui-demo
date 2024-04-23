import { useState } from 'react'
import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'React'];

type Skill = {
    id: number
    label: string
}

const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}));

/**
 *  on change handler not working oh ! to be reviewed later  20240419
 * 
 * @returns 
 */
export const MuiAutocomplete = () => {

    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)
    
    console.log("value: " + value)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
     {        
        console.log("new val: " + event.target.value)
        setValue(event.target.value)
     }

  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete options={skills} 
      renderInput={(params) => <TextField {...params} label='Skills'
      value={value}    
      onChange={handleChange}     
       >
      </TextField>}
      >
      </Autocomplete>
      <Autocomplete options={skillOptions} 
      renderInput={(params) => <TextField {...params} label='Skills'
      value={skill}    
      onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}     
       >
      </TextField>}
      >
      </Autocomplete>
    </Stack>
  )
}
