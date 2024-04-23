import { useState } from 'react'

import {Box, FormControlLabel, Checkbox, 
FormControl, FormLabel, FormGroup, FormHelperText} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckBox = () => {

const [acceptTnC, setAcceptTnc]= useState(false)

const [skills, setSkills] = useState<string[]>([])

//console.log("acceptTnc: " + acceptTnC)
 console.log("skills: " + skills);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked)
}

const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   
    const index = skills.indexOf(event.target.value);

    if (index === -1)
    {
       setSkills([...skills, event.target.value])
    }
    else
    {
        setSkills(skills.filter((skill) => skill !== event.target.value))
    }
}

  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions'
             control={<Checkbox size='small' color='secondary' checked={acceptTnC} onChange={handleChange}/>}>

            </FormControlLabel>
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon/>} 
            checkedIcon={<BookmarkIcon />}
            checked={acceptTnC} 
            onChange={handleChange}
            ></Checkbox>
        </Box>
        <Box>
            <FormControl error>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                     label='HTML'
                     value='html'
                     control={<Checkbox value='html'checked={skills.includes('html')}  onChange={handleSkillChange} />}
                    />
                    <FormControlLabel
                     label='CSS'
                     value='css'
                     control={<Checkbox value='css'checked={skills.includes('css')}  onChange={handleSkillChange} />}
                    />
                    <FormControlLabel
                     label='Javascript'
                     value='javascript'
                     control={<Checkbox value='javascript'checked={skills.includes('javascript')}  onChange={handleSkillChange} />}
                    />
                    
                </FormGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Box>
        </Box>
  )
}
