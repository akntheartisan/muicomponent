import React, { useState } from 'react';
import { TextField, Stack, InputAdornment } from "@mui/material";


const Muitextfield = () => {
    const [value, setValue] = useState('')
  return (
    <Stack direction='row' spacing={4}>
      <TextField label='name' size='small' variant="outlined" />
      <TextField label='password' helperText={true ? 'incorrect' : 'correct'} variant="outlined" required />
      <TextField label='readonly' inputProps={{readOnly:true}} />
      <TextField label='weight' 
        InputProps={{ 
        endAdornment:<InputAdornment position='end'>kg</InputAdornment> 
        }} />
      <TextField label='amount' 
        InputProps={{ 
            startAdornment:<InputAdornment position='start'>$</InputAdornment> 
        }} />
       <TextField label='name' value={value} onChange={(e)=>setValue(e.target.value)} error={!value} />
    </Stack>
  );
};

export default Muitextfield;