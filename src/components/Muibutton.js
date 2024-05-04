import { Button,Stack,IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import React from 'react'

const Muibutton = () => {
  return (
    <>
    <Stack  direction="column" spacing={4}>
    <Stack direction={'row'} spacing={2}>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">contained</Button>
        <Button variant="text">contained</Button>
    </Stack>

    <Stack display='block' direction='row' spacing={2}>
        <Button variant="contained" size="small">contained</Button>
        <Button variant="contained" size="medium">contained</Button>
        <Button variant="contained" size="large">contained</Button>
    </Stack>

    <Stack  direction='row' spacing={2}>
         <Button variant="contained" startIcon={<SendIcon/>}>send</Button>
         <Button variant="contained" endIcon={<SendIcon/>}>send</Button>
    </Stack>

    <IconButton href="https://www.youtube.com/watch?v=fgTLgz1xSn8&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=4">
        <SendIcon/>
    </IconButton>
    </Stack>

    </>

    
  )
}

export default Muibutton