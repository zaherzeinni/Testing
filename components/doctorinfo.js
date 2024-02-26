import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { PiStarFill } from "react-icons/pi";

export default function Doctorinfo() {
  const theme = useTheme();

  return (
    <div className=' flex w-[73.5%] md:w-[68%] m-auto my-5 '>
    <Card sx={{ display: 'flex',minWidth:'100%',margin:'auto',justifyContent:'start', borderRadius:'10px 10px 10px 10px', }}>
      
    <CardMedia
        component="img"
        sx={{ width: 220 , padding: '10px',borderRadius:'5px 5px 5px 5px' }}
        image="https://doctor-zeta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdoctor-thumb-01.ef6e5f6d.jpg&w=384&q=75"
        alt="pic"
        className=' rounded-3xl sm:w-[100]'
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        
        
        <CardContent sx={{ flex: '1 0 auto',padding:'10px' }}>
          
          <Typography component="div" variant="h5">
            Doctor Zeinni
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Diagnoses, Treats, and advises patients on dental issues.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <img src='https://doctor-zeta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspecialities-05.7554f58c.png&w=64&q=75'
        className='w-8 h-8'
        />  Teeth
        </Box>
        <Box className='flex' >
        <Box className='flex text-yellow-500'>
        <PiStarFill /><PiStarFill /><PiStarFill /><PiStarFill /><PiStarFill /> 
        </Box>
        <Box>
        (17)
        </Box>
        </Box>
        </CardContent>

      </Box>

    </Card>
    </div>
  );
}