import React,{useState} from 'react'
import { Rating,Box } from '@mui/material'

const Muirating = () => {
    const [value, setValue] = useState(0);
    console.log(value);
  return (
    <Box>
        <Rating precision={0.5} color='error' value={value} onChange={(event,newValue)=>setValue(newValue)}/>
    </Box>
  )
}

export default Muirating
