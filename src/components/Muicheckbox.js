import { Box, Checkbox, FormControlLabel,BookmarkBorderIcon,BookmarkIcon,FormControl,FormGroup, FormLabel } from '@mui/material'
import React, {useState} from 'react'


const Muicheckbox = () => {
    const [checked, setChecked] = useState(false);
    const [skill,setSkill] = useState([]);



    function handleChange(e){
        setChecked(e.target.checked);
    }

    function handleSkill(e){
      const index = skill.indexOf(e.target.value);
      console.log(index);
      if (index === -1) {
        setSkill([...skill,e.target.value]);
      } else {
        setSkill(skill.filter((each)=> each !== e.target.value));
      }
    }

    console.log(skill);
  return (
     <>
      <Box>
        <FormControlLabel 
        label='I Accept Terms and Conditions'
        control={<Checkbox checked={checked} onChange={handleChange}/>}
        />
      </Box>

    <Box>
      <FormControl>
        <FormLabel>Skills</FormLabel>
        <FormGroup row>
          <FormControlLabel label='HTML'  control={<Checkbox value='html' checked={skill.includes('html')} onChange={handleSkill}/>}/>
          <FormControlLabel label='CSS'  control={<Checkbox value='css' checked={skill.includes('css')} onChange={handleSkill}/>}/>
          <FormControlLabel label='JS'  control={<Checkbox value='js' checked={skill.includes('js')} onChange={handleSkill}/>}/>
        </FormGroup>
      </FormControl>
    </Box>

     </>
   
  )
}

export default Muicheckbox