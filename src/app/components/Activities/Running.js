import CourseVideo from './CourseVideo';
import { makeStyles } from '@mui/styles';
import { Paper, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';


import "./Running.css";
import running1 from "./img/running1.png";
import running2 from "./img/running2.png";
import running3 from "./img/running3.png";
import running4 from "./img/running4.png";
import running5 from "./img/running5.png";
import running6 from "./img/running6.png";
import running7 from "./img/running7.png";
import running8 from "./img/running8.png";
import running9 from "./img/running9.png";


const useStyles = makeStyles(() => ({
  paper: {
    background: '#5A226D',

  },
  paper1: {
    marginTop: '82px',
    marginRight: '',
    marginLeft: '',
    height: '280px',
    width: '280px',

    photo: {
      width: '380px',
      height: '380px'
    }
  },

}))

// Class for picture in Stack Component
export const Running = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper sx={{
        background: 'white',
        height: "600px",
        width: "90%",
        margin: '0px auto',
        justifyItems: "center",

      }}>
        <Stack sx={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <CourseVideo videoid="Hz9whDDJ3oY" />
        </Stack>
      </Paper>
      // First stack
      <Stack sx={{
        width: '90%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: '100px',
        marginTop: '60px',
        alignItems: 'center',
        justifyContent: 'center',


      }}>
        <Stack sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          width: '700px',
          paddingBottom: '75px',
        }}>
          <Paper className={classes.paper} id="paper0" ><Typography id="context_paper0">How to run confidently when you're just starting out </Typography></Paper>
          <Paper className={classes.paper}>
            <img src={running1} id="running1" />
          </Paper>
          <Paper className={classes.paper}>
            <img id="running2" src={running2} />
          </Paper>
          <Paper className={classes.paper} id="paper3"></Paper>
        </Stack>
      </Stack>


        // Second stack component

      <Paper sx={{
        width: '80%',
        height: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '60px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BC5A5B',
        boxShadow: 0,
        borderRadius: 'none'
      }}>
        <Stack direction='row' sx={{
          width: '100%',
          gap: '10px',
          alignItems: 'center',
          margin: 'auto',
          paddingTop: '90px',

        }}>
          <img src={running3} alt="running3" style={{ width: '380px', height: '380px' }} />
          <img src={running4} alt="running4" style={{ width: '380px', height: '380px' }} />
          <img src={running5} alt="running5" style={{ width: '380px', height: '380px' }} />

        </Stack>
      </Paper>
      //Third Stack Component
      <Stack sx={{
        width: '80%',
        height: '100%',
        marginLeft: '250px',
        marginRight: 'auto',
        marginTop: '0px',
        alignItems: 'center',

      }}>
        <Stack sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',

          paddingBottom: '100px',
          gap: '0px',
          paddingRight: 'auto',
          paddingLeft: 'auto',
          justifyContent: 'flex',
          marginTop: '40px',

        }}>
          <Paper className={classes.paper}><img src={running6} id="running6" /></Paper>
          <Paper className={classes.paper} id="paper4"></Paper>



        </Stack>
      </Stack>


          //Fourth Stack Component

      <Paper sx={{
        width: '80%',
        height: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '60px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4C8C81',
        boxShadow: 0,
        borderRadius: 'none', 
        paddingBottom:'50px', 
      }}>
        <Stack direction='row' sx={{
          width: '100%',
          gap: '10px',
          alignItems: 'center',
          margin: 'auto',
          paddingTop: '90px',

        }}>
          <img src={running7} alt="running7" style={{ width: '380px', height: '380px' }} />
          <img src={running8} alt="running8" style={{ width: '380px', height: '380px' }} />
          <img src={running9} alt="running9" style={{ width: '380px', height: '380px' }} />

        </Stack>
      </Paper>













    </div>





  )
}
export default Running;











