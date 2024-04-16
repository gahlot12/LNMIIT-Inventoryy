import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import santosh from "../assets/santosh.png"
import Aryan from "../assets/aryan.png"
import kunal from "../assets/Kunal.png"
import krishan from "../assets/krishan.png"
import auser from '../assets/auser.png'

export default function DevTeam() {
  return (
   
    
    <div spacing={{ xs: 1, sm: 2, md: 4 }}
       direction={{ xs: 'column', sm: 'row' }}
       useFlexGap flexWrap="wrap"
       alignItems="center"
       justifyContent="center"
    >
      <div className='flex flex-col'>
      <h1 className='text-center text-red-700 font-bold pb-10 text-[35px] '>Our Mentor</h1>
      <div>
      <Card className="stickyCard" sx={{ maxWidth: 360, height: '100%', width: '100%', flexBasis: '30%', minHeight: 330,maxHeight:350, display: 'flex', flexDirection: 'column', alignItems: 'center',margin: 'auto' }}>
      <CardActionArea style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
        <CardMedia
          component="img"
          // height="10"
          image={santosh}
          alt="Dr. Santosh Shah"
          style={{ padding:15, height:130,width:130 ,borderRadius:'50%',zIndex:'0'}}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
          Dr. Santosh Shah
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Assistant Dean of Student Affair
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button 
         onClick={() => window.location.href = ' https://www.linkedin.com/in/santosh-shah-986999117/'}
         className='stickyButton w-full bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mt-4'>
          Linkedin
        </button>
      </CardActions>
    </Card>
    </div>

    <h1 className='text-center text-red-700 font-bold pb-10 text-[35px] '>Our Team</h1>
    <div className='flex justify-center space-x-12' >
    <Card className="stickyCard" sx={{ maxWidth: 360, height: '100%', width: '100%', flexBasis: '30%', minHeight: 330,maxHeight:350, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CardActionArea style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
        <CardMedia
          component="img"
          // height="10"
          image={Aryan}
          alt="Aryan Dumyan"
          style={{ padding:15, height:130,width:130 ,borderRadius:'50%',zIndex:'0'}}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            Aryan Dumyan
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Backend Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button 
         onClick={() => window.location.href = 'https://www.linkedin.com/in/aryan-dumyan-761638223/'}
         className='stickyButton w-full bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mt-4'>
          Linkedin
        </button>
      </CardActions>
    </Card>
    <Card className='stickyCard' sx={{ maxWidth: 360, height: '100%', width: '100%', flexBasis: '30%', minHeight: 330,maxHeight:350, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CardActionArea style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
        <CardMedia
          component="img"
          // height="10"
          image={kunal}
          alt="Kunal Gahlot"
          style={{ padding:15, height:130,width:130 ,borderRadius:'50%',zIndex:'0'}}
        />
        <CardContent height='300'>
          <Typography gutterBottom variant="h5" component="div">
            Kunal Gahlot
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Frontend Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button 
         onClick={() => window.location.href = 'https://www.linkedin.com/in/kunal-gahlot-127935227/'}
         className='stickyButton w-full bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mt-4'>
          Linkedin
        </button>
      </CardActions>
    </Card>
    <Card className='stickyCard' sx={{ maxWidth: 360, height: '100%', width: '100%', flexBasis: '30%', minHeight: 330, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CardActionArea style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
        <CardMedia
          component="img"
          // height="10"
          image={krishan}
          alt="Krishan Singh Rawat"
          style={{ padding:15, height:130,width:130 ,borderRadius:'50%',zIndex:'0'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Krishan Singh Rawat
          </Typography>
          <Typography variant="body2" color="text.secondary">
            AI/ML Engineer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button 
         onClick={() => window.location.href = 'https://www.linkedin.com/in/krishan-rawat-b294a2264?trk=contact-info'}
         className='stickyButton w-full bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mt-4'>
          Linkedin
        </button>
      </CardActions>
    </Card>
    </div>
    </div>
    <style>
      {
        `
       
        
        .flex.flex-col {
          margin-bottom: 20px; /* Add margin between columns */
        }

        .stickyCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Make sure the card takes 100% height */
  margin-bottom: 20px; /* Add margin between cards */
}

.stickyButton {
  width: 100%;
  {/* background-color: teal; */}
  color: white;
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  margin-top: auto; /* Push the button to the bottom of the card */
}

        `
      }
    </style>
    </div>
  );
}
