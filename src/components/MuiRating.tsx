import { Stack, Rating } from '@mui/material'
import {useState} from 'react'
import FavouriteIcon from '@mui/icons-material/Favorite'
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder'


export const MuiRating = () => {

    const [value, setValue] = useState<number | null>(null)

    console.log(value)

    const handleChange = (_event: React.ChangeEvent<{}>,
         newValue: number | null) => {
            setValue(newValue)
         }

  return (
    <Stack spacing={2}>
        <Rating value={value} onChange={handleChange} precision={0.5}
        size='large'
        icon={<FavouriteIcon fontSize='inherit' color='error'  />}
        emptyIcon={<FavouriteBorderIcon fontSize='inherit' />}
       
        highlightSelectedOnly
        ></Rating>
    </Stack>
  )
}
