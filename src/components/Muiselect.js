import React,{useState} from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

const Muiselect = () => {
    const [select, setSelect] = useState([])
    console.log(select);
  return (
    <Box width='250px'>
        <TextField 
        select
        label="Select Country"
        value={select}
        onChange={e => setSelect(e.target.value)}
        fullWidth
        SelectProps={{multiple:true}}
        >
           <MenuItem value='Ind'>India</MenuItem>
           <MenuItem value='US'>USA</MenuItem>
           <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}

export default Muiselect