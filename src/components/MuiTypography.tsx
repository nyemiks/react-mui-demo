import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>
        <Typography variant='subtitle1'>sub title 1</Typography>
        <Typography variant='subtitle2'>sub title 2</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos nulla doloremque fuga voluptatem ab cumque illum dolorem placeat, cupiditate quibusdam atque officia eveniet expedita similique, id tempore tempora magni?</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis, veritatis, maxime error unde tempora rem doloremque commodi deserunt illum quidem iure? Dolorem repellat maiores exercitationem sit! Nam, laboriosam non!</Typography>
    </div>
  )
}
