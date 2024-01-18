import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TimeAgo from './timeNow';




const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function PostList({posts}) {
  return (
    <Grid container spacing={3}   >
    
    {posts.map((data)=>( <Grid item lg={3} sm={6} xs={12} >
    <Card sx={{ maxWidth: '250px',gap:"5px",mx: '15px', my:'15px'}} sx={{
        ':hover': {
          boxShadow: 20,
          cursor:'pointer'
        },
      }}>
        
            
      
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="h5" component="div">
        {data.id}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.content}
        </Typography>
        <Typography variant="body2">
        {data.userId}
          <br />
          </Typography>
          <Typography>
          <TimeAgo timestamp={data.date}/>
        </Typography>
      </CardContent>
        
    </Card>


</Grid>
))}
</Grid>
  );
}